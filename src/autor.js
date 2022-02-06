/*
* Clase Autor
*/
var Autor = function() {
    
    var sThis = this;

    this.datosAutor = {
        nombreCompleto : '',
        fechaNacimiento : '',
        nacionalidad : ''
    };

    var getNombreCompleto = function() {
        return sThis.datosAutor.nombreCompleto;
    },

    setNombreCompleto = function(nombreCompleto) {
        sThis.datosAutor.nombreCompleto = nombreCompleto;
    },

    getFechaNacimiento = function() {
        return sThis.datosAutor.fechaNacimiento;
    },

    setFechaNacimiento = function(fechaNacimiento) {
        sThis.datosAutor.fechaNacimiento = fechaNacimiento;
    },

    getNacionalidad = function() {
        return sThis.datosAutor.nacionalidad;
    },

    setNacionalidad = function(nacionalidad) {
       sThis.datosAutor.nacionalidad = nacionalidad;
    };

    return {
        getNombreCompleto : getNombreCompleto,
        setNombreCompleto : setNombreCompleto,
        getFechaNacimiento : getFechaNacimiento,
        setFechaNacimiento : setFechaNacimiento,
        getNacionalidad : getNacionalidad,
        setNacionalidad : setNacionalidad
    }

};