//index.js
var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://CarlosErnestoArreola:Prepa%233fesa@cluster0-tlgcz.mongodb.net/facultadDB?retryWrites=true', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

  function nuevoLibro(){
    var Lib= Libro({
      titulo: "camino al terror",
      autor: {
        primer: "Jonathan",
        paterno: "Cervantez",
        materno: "Contreras"
      },
      genero: "Terror",
      edicion: 1,
      editorial: "Séneca",
      numPaginas: 300,
      sinopsis: "El relato de unos vacacionistas y su tragica historia",
      ISBN: 9788467043664
    });
  
    Lib.save(function(err,data){
      if (err) {
        console.log("------------------------ERROR --------------------------");
      }else {
        console.log("------------------------OK ---------------------------");
      }
    });
  }

  function nuevosLibros() {

    var Libros=[
      { titulo: "Frankenstein",autor: {primer: "Jesús", paterno: "Hernandez", materno: "Cabrera" },genero: "Terror", edicion: 1, editorial: "Arlequín", numPaginas: 400, sinopsis:"libro ambientado en la epoca romana", ISBN: 9788467043662},
      { titulo: "Hadas",autor: {primer: "Diego", paterno: "Pérez", materno: "Zedillo" },genero: "Fantasia", edicion: 2, editorial: "Clío", numPaginas: 250, sinopsis:"cuentos y leyendas de hadas", ISBN: 9788468943662},
      { titulo: "Fantasmas y más",autor: {primer: "Alex", paterno: "Pérez", materno: "Obrador" },genero: "Terror", edicion: 1, editorial: "Grijalbo", numPaginas: 153, sinopsis:"casas de espantos y fantasmas", ISBN: 9788467049528},
      { titulo: "Naruto",autor: {primer: "René", paterno: "Dávila", materno: "Moreno" },genero: "Aventuras", edicion: 3, editorial: "Grijalbo", numPaginas: 223, sinopsis: "las aventuras de naruto y su camino ninja", ISBN: 9712347043662},
      { titulo: "El viajero",autor: {primer: "Ari", paterno: "Olarte", materno: "Paz" },genero: "Ciencia ficcion", edicion: 2, editorial: "Arlequín", numPaginas: 987, sinopsis: "anecdotas e historias de un viajero", ISBN: 9788487654662},
      { titulo: "Cañitas",autor: {primer: "Arturo", paterno: "Mares", materno: "Espinosa" },genero: "Paranormal", edicion: 2, editorial: "Arlequín", numPaginas: 167, sinopsis:"historias de casas embrujadas", ISBN: 978846707845},
      { titulo: "Policletos",autor: {primer: "Samuel", paterno: "Campos", materno: "Zedicar" },genero: "Policiaca", edicion: 2, editorial: "Clío", numPaginas: 788, sinopsis:"una pareja de policias muy efectivos", ISBN: 9788567043662},
      { titulo: "La colonia",autor: {primer: "Carlos", paterno: "Cervantez", materno: "Nieto" },genero: "Gotica", edicion: 1, editorial: "Grijalbo", numPaginas: 777, sinopsis:"novela ambientada en la epoca del colonialismo", ISBN: 9788468453662},
      { titulo: "R&J",autor: {primer: "Montse", paterno: "Negrete", materno: "Capetillo" },genero: "Romance", edicion: 1, editorial: "Grijalbo", numPaginas: 871, sinopsis:"una pareja separada por sus padres", ISBN: 9788469083662},
      { titulo: "El viaje del amor",autor: {primer: "Gabriel", paterno: "Arreola", materno: "Sugara" },genero: "Romance", edicion: 1, editorial: "Grijalbo", numPaginas: 206, sinopsis:"historias de una pareja de viajeros, que atraviesa todo el mundo", ISBN: 9488467043662},
  
    ];
  
    Libro.collection.insert(Libros,function(err,data){
      if (err) {
        console.log("------------------------ERROR --------------------------");
      }else {
        console.log("------------------------OK ---------------------------");
        console.log(data);
      }
    });
  } 
  
  function buscarByIsbn(isbn){
    Libro.find({ISBN:isbn},function(err,documentos){
      console.log(documentos);
    });
  }


  function modificarTituloByIsbn(isbn, nuevoTitulo, Autor){
    Libro.findOneAndUpdate({ISBN:isbn},{'titulo':nuevoTitulo},{"autor.primer":Autor},function(err,data){
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }

function main() {
  //nuevosLibros(); //funcion que crea 10 libros
  //nuevoLibro(); //funcion que crea un solo libro
  //buscarByIsbn(9788467043662); //funcion que busca un libro por su isbn
  //modificarTituloByIsbn(9488467043662, "El viaje en el mundoamor", "Gabriel"); //funcion que Modifica el titulo de un libro
}

main(); // ejecutamos main