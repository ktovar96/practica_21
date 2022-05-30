const express = require('express'); //inyectamos dependencia
const router = express.Router(); //inyectamos dependencia x2
const mongoose = require('../node_modules/mongoose');

let Person = require('../models/person'); 

router.get('/persons', function(req, res, next) {  //creamos la ruta para obetener una lista de las personas que están en nuestra BD
    Person.find(function (err, persons){
        if (err) return next(err);
        res.render("persons", {'persons': persons});
    })
});

router.get('/person', function (req, res) {  
    res.render('./person');
});

router.post('/addPerson', function(req, res) { //creamos la ruta para agregar nuevas personas a la BD
    const person = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    person.save()
    res.redirect("./persons") 
});

router.get('/index', function (req, res){ //creamos la ruta que renderiza index
    res.render('./index');
});

module.exports = router;