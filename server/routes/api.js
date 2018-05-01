const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Equipo = require('../models/equipo');
const Jugador = require('../models/jugador');
const db = "mongodb://admin:admin@ds147659.mlab.com:47659/futicodb";

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

router.get("/teams", (req, res, next) => {
    Equipo.find()
      .exec()
      .then(docs => {
        //console.log(docs);
           if (docs.length >= 0) {
           console.log(docs[0].jugadores)
         //    console.log(JSON.stringify(docs))
        res.status(200).json(docs);
        
          } else {
               res.status(404).json({
                   message: 'No entries found'
               });
           }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

  router.get("/teams/team/:nombre", (req, res, next) => {
    const nombre = req.params.nombre;
    console.log("nombre : " + nombre)
    Equipo.findOne({nombre: nombre})
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
          console.log("jugadores en especifico: " + docs.Jugador[0].nombre)
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

  router.get("/players/team/:nombre/:apellido", (req, res, next) => {
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    Equipo.findOne({ 'jugadores.nombre': nombre , 'jugadores.apellido': apellido})
      .exec()
      .then(doc => {
       //  console.log("From database", doc);
        if (doc) {
          let jugador = doc.jugadores[]
          res.status(200).json(doc.jugadores);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });


  module.exports = router;
