function descargarUnArchivo(url, callback) {
    setTimeout(() => {
        console.log(`Descargando archivo desde ${url}...`);
        callback("Archivo descargado.");
    }, 2000);
}

descargarUnArchivo("https://rickandmortyapi.com/api", function (mensaje) {
    console.log(mensaje);
})

function descargarOtroArchivo(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://rickandmortyapi.com") {
                resolve("Achivo descargado")
            } else {
                reject("Error en la URL");
            }
        }, 2000);
    }
    );
}

descargarOtroArchivo("https://rickandmortyapi.com")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

async function procesarArchivo(url) {
    try {
        let mensaje = await descargarOtroArchivo(url);
        console.log(mensaje);
    } catch (error) {
        console.log(error);
    }
}

procesarArchivo("https://rickandmortyapi.com");