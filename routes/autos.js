const { Router } = require('express');
const router = Router();

const Auto = require('../controllers/auto');
const auto = new Auto();


router.get('/', (req, res) =>{
        auto.registros();
});

router.post('/Ensamblar', (req,res) => {
        
        autos = req.body;
        console.log(autos);
        auto.almacenar(autos);
        auto.ensamblar();

});


module.exports = router;