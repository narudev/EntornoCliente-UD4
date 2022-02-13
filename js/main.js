
function Edificio(calle, numero, codPostal) {

    //Propiedades
    this.calle = calle;
    this.numero = numero;
    this.codPostal = codPostal;
    this.plantasEdificio = []; //Creamos un array [planta][puertas]

    //Métodos
    this.agregarPlantasyPuertas = function (numplantas, puertas) { //Agregar nº Plantas y puertas por planta  

        document.write("Se agregan " + numplantas + " plantas con " + puertas + " puertas<br>");

        if (this.plantasEdificio.length == 0) { // Compobramos si esta vacio
            for (var i = 0; i < numplantas; i++) {
                this.plantasEdificio[i] = []; //le damos el tamaño a nuestro array de plantas
                for (var j = 0; j < puertas; j++) { //En cada posicion del array de las plantas, añadimos cuantos pisos tendra por planta
                    this.plantasEdificio[i].push(""); //añadimos el numero de plantas al final del array
                }
            }
        } else {
            for (var i = 0; i < numplantas; i++) {
                this.plantasEdificio[this.plantasEdificio.length] = []; //Sino esta vacio lo creamos con el tamaño que dispone y añadimos mas pisos
                for (var j = 0; j < puertas; j++) {
                    this.plantasEdificio[this.plantasEdificio.length -1].push(""); //Comprobamos el ultimo valor y añadimos al final
                }
            }
        }

    }
    this.modificarNUmero = function (nuevoNumero) { //Modifica el numero
        this.numero = nuevoNumero;
    }
    this.modificarCalle = function (nuevaCalle) { // Modifica calle
        this.calle = nuevaCalle;
    }
    this.modificarCodigoPostal = function (nuevoCP) { //Modifica Codigo Postal
        this.codPostal = nuevoCP;
    }
    this.mostrarCalle = function () {
        return this.calle;
    }
    this.mostrarNumero = function () {
        return this.numero;
    }
    this.mostrarCodigoPostal = function () {
        return this.codPostal;
    }
    this.agregarPropietario = function (nombre, planta, puerta) {

        this.plantasEdificio[planta][puerta] = nombre; //Le asignamos a nuestro array de plantasEdificio el nombre del propietario

        document.write(nombre + " es el nuevo propietario de la puerta " +
            (puerta + 1) + " de la planta " +
            (planta + 1) + ".</br>");
    }

    this.mostrarPlantas = function () {
        document.write("<h2>Lista de propietarios del edificio, calle : " + this.mostrarCalle() +
            " nº: " + this.mostrarNumero() +
            " con Código Postal: " + this.mostrarCodigoPostal() + "</h2></br>");

        for (var i = 0; i < this.plantasEdificio.length; i++) {
            for (var j = 0; j < this.plantasEdificio[i].length; j++) { //Recorremos nuestras plantas y puertas

                if (this.plantasEdificio[i][j] == "") this.plantasEdificio[i][j] = "VACÍO"; //Comprabamos si la puerta esta VACIA
                
                document.write(
                    "El propietario del piso " + (j + 1) + " de la planta " + (i + 1) + " es: " + this.plantasEdificio[i][j] + "<br>"
                );

            }
        }

    }

    document.write("<h2>Añadimos un nuevo edificio...</h2>");
    document.write("<h4>Nuevo Edificio construido en Calle: " + this.mostrarCalle() + " , nº: " + this.mostrarNumero() + " , CP: " + this.mostrarCodigoPostal() + "</h4>");
}

document.write("<h1>Gestión de Edificios</h1>");
document.write("<hr>");
var edificio1 = new Edificio("Orense", 5, 21004);
var edificio2 = new Edificio("Gran Vía", 23, 21110);

document.write("<br/>");
document.write("<hr>");

document.write("<h2>Añadimos tres propietarios... en la calle " + edificio1.mostrarCalle() + " nº " + edificio1.mostrarNumero() + "</h2></br>");
edificio1.agregarPlantasyPuertas(2, 2);
edificio1.agregarPropietario("Pepe Flores", 0, 0);
edificio1.agregarPropietario("Manolo Gómez", 0, 1);
edificio1.agregarPropietario("Javier Acosta", 1, 1);

edificio1.mostrarPlantas();

document.write("<hr>");

document.write("<h2>Añadimos dos propietarios... en la calle " + edificio2.mostrarCalle() + " nº " + edificio2.mostrarNumero() + "</h2></br>");
edificio2.agregarPlantasyPuertas(2, 2);
edificio2.agregarPropietario("Juan Muñoz", 0, 0);
edificio2.agregarPropietario("Maria Pérez", 1, 1);

edificio2.mostrarPlantas();

document.write("<br/>");
document.write("<h2>Añadimos 2 plantas más y 1 piso por planta</h2><br>");
edificio2.agregarPlantasyPuertas(2, 1);

edificio2.agregarPropietario("Julia Fernandez", 3, 0);

edificio2.mostrarPlantas();


//Test console log
/*
for (var k = 0; k < edificio1.plantasEdificio.length; k++) {
    console.log(edificio1.plantasEdificio[k]);
}

for (var k = 0; k < edificio2.plantasEdificio.length; k++) {
    console.log(edificio2.plantasEdificio[k]);
}
*/

