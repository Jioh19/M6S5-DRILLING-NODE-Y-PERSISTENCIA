
const args = process.argv.slice(2);
const opcion = args[0];
const propiedad = args[1];
const valor = args[2];
const leerArchivo = require("./leerArchivo.js");
const escribirDatos = require("./escribirDatos.js");
const eliminaPropiedad = require("./eliminaPropiedad.js");
const verificaParametrosEntrada = require("./verificaParametrosEntrada.js")

let objetoDatos = {};

const validarOpcionesEntrada = () => {
	switch (opcion) {
		case "leer":
			leerArchivo();
			break;
		case "agregar":
			escribirDatos();
			break;
		case "eliminar":
			eliminaPropiedad();
			break;
		default:
			verificaParametrosEntrada();
	}
};

validarOpcionesEntrada();
