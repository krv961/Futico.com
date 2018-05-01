const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    nombre: String,
    sigla: String,
    ano_creacion: {type: Date},
    titulos: {type: Number},
    dt: String,
    jugadores: [],
    historia: String,
    estadio: String,
    partitidosGanados: {type: Number},
    partidosEmpatados:{type: Number},
    partidosPerdidos:{type: Number},
    golesFavor:{type: Number},
    golesContra:{type: Number},
    puntos:{type: Number},
});




module.exports = mongoose.model('team', teamSchema, 'equipos');

