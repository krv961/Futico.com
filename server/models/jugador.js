const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    nombre: String,
    apellido: String,
    numero: {type: Number},
    goles: {type: Number},
    asistencias: {type: Number},
    fechaNacimiento: {type: Date},
    nacionalidad: String,
    posicion: String
});




module.exports = mongoose.model('player', playerSchema, 'teams');

