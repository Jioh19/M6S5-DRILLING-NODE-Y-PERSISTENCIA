const fs = require("fs/promises");
const args = process.argv.slice(2);
const propiedad = args[1];
const valor = args[2];

const escribirDatos = async () => {
	try {
		const datos = await fs.readFile("datos.txt");
		if (datos.length !== 0) {
			objetoDatos = JSON.parse(datos);
		}
		const nuevoObjeto = { ...objetoDatos, [propiedad]: valor };
		await fs.writeFile("datos.txt", JSON.stringify(nuevoObjeto, null, 2));
		console.log("Los datos han sido agregados exitosamente");
	} catch (error) {
		console.log("Lo sentimos, ha ocurrido un error");
		console.log(error);
	}
};

module.exports = escribirDatos;