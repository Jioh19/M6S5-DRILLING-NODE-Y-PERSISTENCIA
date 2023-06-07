const fs = require("fs/promises");

const fetchGet = async (url, archivo) => {
	try {
        const response = await fetch(url);
        const jsonData = await response.json();
        await fs.writeFile(archivo, JSON.stringify(jsonData, null, 2));
	} catch (err) {
		console.log("Lo sentimos, ha ocurrido un error");
		console.log(err);
	}
};

module.exports = fetchGet;
