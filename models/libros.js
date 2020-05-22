var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  titulo: String,
  autor: {
    primer: String,
    paterno: String,
    materno: String
  },
  genero: String,
  edicion: Number,
  editorial: String,
  numPaginas: Number,
  sinopsis: String,
  ISBN: Number
});

module.exports = mongoose.model('Libro', LibroSchema);