const { response, request } = require('express');
const util = require("util");
let registroAutos = require('../regristro.json');

class Auto {

    registros() {
        console.log(registroAutos);
        return;
    }

    almacenar(autos) {
        autos.forEach(auto => {
            let newAuto = {
                id: auto.id,
                marca: auto.marca,
                modelo: auto.modelo,
                motor: auto.motor,
                transmision: auto.transmision,
                ruedas: auto.ruedas,
                tanque: auto.tanque,
                puertas: auto.puertas,
                ventanas: auto.ventanas,
                asientos: auto.asientos,
                carroceria: auto.carroceria
            };

            registroAutos.push(newAuto);
        });

        console.log('Registro Agregado a la linea de ensamblaje!')
        return;
    }

    async ensamblar() {
        console.time("tiempo de ejecucion");
        let registroAutos = require('../regristro.json');
        registroAutos.forEach(async auto => {
            this.montajeMotor(auto.motor);
            this.montajeTransmision(auto.transmision, auto.ruedas);
            this.montajeTanque(auto.tanque, auto.ltrsGasolina);
            this.montajePuertas(auto.puertas, auto.ventanas);
            this.montajeAsientos(auto.asientos);
            this.montajeCarroceria(auto.carroceria);
        })
        console.timeEnd("tiempo de ejecucion");
    }

    async montajeMotor(motor) {
        await time(4000);
        console.log("montaje de motor " + motor + " exitoso!");
        return;
    }
    async montajeTransmision(transmision, ruedas) {
        await time(2000 + (ruedas * 1000));
        console.log("montaje de transmision " + transmision + " y sus " + ruedas + " ruedas exitoso!");
        return;
    }
    async montajeTanque(tanque, ltrsGasolina) {
        await time(2000 + (ltrsGasolina * 3000));
        console.log("montaje de tanque" + tanque + "Gasolina" + ltrsGasolina + "litros de tanque lleno");
        return;
    }
    async montajePuertas(puertas, ventanas) {
        await time(4000 + (ventanas * 1000));
        console.log("puertas montadas" + puertas + "ventanas montadas" + ventanas);
        return;
    }
    async montajeAsientos(asientos) {
        await time(5000);
        console.log("asientos montados" + asientos + "tapiceria completada");
        return;

    }
    async montajeCarroceria(carroceria) {
        await time(6000);
        console.log("todas las piezas montadas" + carroceria + "carroceria completada");
        return;
    }


}

module.exports = Auto;