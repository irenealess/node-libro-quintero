function add(a, b) {
    return a + b;
}

module.exports = add; //para Node JS cada archivo es un módulo que puede exponer funcionalidad.
                      //yo puedo exponer funcionalidad a través de un módulo
                      //este mismo módulo puede ser requerido por otros :)