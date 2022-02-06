const {messageOk} = require('constants');

/*
This defines a test suite for the "add" feature.
*/

QUnit.module('Test arrays'); //Group related tests under a common label

var miarray = ["hola", "estamos", "haciendo", "una", "prueba"];
var miarrayAsociativo =  ["hola", "estamos", "haciendo", "una", "prueba"];
miarrayAsociativo["indice"] = "cadena de texto";
var miJson = {
    nick: "jvix",
    nomnbreCompleto: "Javier Pérez Álvarez",
    email: "jvix@jvix.com",
    password: "jvix543"
};

QUnit.test('Prueba array', function( assert ) {
    assert.equal (miarray[0], "hola", messageOk);
    assert.equal (miarray[1], "estamos", messageOk);
    assert.equal (miarray[2], "haciendo", messageOk);
    assert.equal (miarray[3], "una", messageOk);
    assert.equal (miarray[4], "prueba", messageOk);
});

QUnit.test('Prueba array asociativo', function( assert ) {
    assert.equal (miarrayAsociativo[0], "hola", messageOk);
    assert.equal (miarrayAsociativo[1], "estamos", messageOk);
    assert.equal (miarrayAsociativo[2], "haciendo", messageOk);
    assert.equal (miarrayAsociativo[3], "una",messageOk);
    assert.equal (miarrayAsociativo[4], "prueba", messageOk);
    assert.equal (miarrayAsociativo["indice"], "cadena de texto", messageOk)
});

QUnit.test("Prueba json", function( assert ){
   assert.equal(miJson.nick, "jvix", messageOk);
   assert.equal(miJson.nomnbreCompleto,"Javier Pérez Álvarez", messageOk);
   assert.equal(miJson.email,  "jvix@jvix.com", messageOk);
   assert.equal(miJson.password, "jvix543", messageOk);
});