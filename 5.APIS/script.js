async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();

        const characterContainer = document.getElementById('characterContainer');
        data.results.forEach(characer => {
            const characerElement = document.createElement('div');
            characerElement.classList.add('character');
            characerElement.innerHTML = `
                <h3>${characer.name}</h3>
                <img src="${characer.image}" width="100px">
                <p>${characer.species}</p>   
            `;
            characerElement.addEventListener('click', () => {
                window.location.href = `detalles.html?id=${characer.id}`;
            });
            characterContainer.appendChild(characerElement);
        });
    } catch (error) {
        console.log('Error bajando datos: ', error);
    }
}

fetchCharacters();