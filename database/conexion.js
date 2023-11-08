const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MongoLocal = process.env.Mongo_Url_Local;
const MongoAtlas = process.env.Mongo_Url_Atlas;

const conexion = mongoose.connect(MongoAtlas).then(
    ()=>{
    console.log('Conectado a la base de datos');
    },
    err => { 
        console.log(`Error al conectar a la base de datos: ${err}`)
    }
);

module.exports = conexion;