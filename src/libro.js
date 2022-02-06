/*
* Clase Libro
*/
var Libro = function() {

    var sThis = this;

    this.datosLibro = { // notación Json
        titulo : '',
        editorial : '',
        autor : '',
        fechaPrimeraEdicion : '',
        isbn : '' 
    };

    var getTitulo = function() {
        return sThis.datosLibro.titulo;
    },

    setTitulo = function(titulo) {
        sThis.datosLibro.titulo = titulo;
    }

};