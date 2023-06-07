const args = process.argv.slice(2);
const opcion = args[0];
let archivo = args[1];

const fetchGet = require("./fetchGet.js");

const verificaParametrosEntrada = () => {
	console.log("Porfavor ejecutar  programa con alguna de las siguientes opciones");
	console.log("Opcion 1: comments");
	console.log("Opcion 2: photos");
	console.log("Opcion 3: albums");
	console.log("Opcion 4: todos");
	console.log("Opcion 5: posts");
	return process.exit();
};

//* Archivo por defecto, opcion.txt
const validarOpcionesEntrada = () => {
    if(archivo == undefined) {
        archivo = `${args[0]}.txt`;
    }
	switch (opcion) {
		case "comments":
			fetchGet(`https://jsonplaceholder.typicode.com/posts/1/comments`, archivo);
			break;
		case "photos":
			fetchGet(`https://jsonplaceholder.typicode.com/albums/1/photos`, archivo);
			break;
		case "albums":
			fetchGet(`https://jsonplaceholder.typicode.com/users/1/albums`, archivo);
			break;
		case "todos":
			fetchGet(`https://jsonplaceholder.typicode.com/users/1/todos`, archivo);
			break;
		case "posts":
			fetchGet(`https://jsonplaceholder.typicode.com/users/1/posts`, archivo);
			break;
		default:
			verificaParametrosEntrada();
	}
};

validarOpcionesEntrada();
