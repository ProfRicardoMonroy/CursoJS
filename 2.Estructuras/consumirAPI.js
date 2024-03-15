async function obtenerPersonajes() {
    try {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');
        const datos = await respuesta.json();
        // console.log(respuesta);

        datos.results.forEach(personaje => {
            console.log(`Nombre: ${personaje.name}`);
            console.log(`Especie: ${personaje.species}`);
            console.log(`Género: ${personaje.gender}`);
            console.log(`Imágen: ${personaje.image}`);
        });
    } catch (error) {
        console.error("Error al obtener los personajes: ", error);
    }
}

obtenerPersonajes();