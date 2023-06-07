const fs = require("fs/promises");
const args = process.argv.slice(2);
const propiedad = args[1];

const eliminaPropiedad = async () => {
	try {
		const datos = await fs.readFile("datos.txt");
		if (datos.length !== 0) {
			objetoDatos = JSON.parse(datos);
		}
		if (objetoDatos.hasOwnProperty(propiedad)) {
			delete objetoDatos[propiedad];
		} else {
			console.log(objetoDatos);
			console.log(propiedad);
			return console.log("Esta propiedad no existe");
		}
		await fs.writeFile("datos.txt", JSON.stringify(objetoDatos, null, 2));
		console.log("Los datos han sido eliminados exitosamente");
	} catch (error) {
		console.log("Lo sentimos, ha ocurrido un error");
		console.log(error);
	}
};

module.exports = eliminaPropiedad;