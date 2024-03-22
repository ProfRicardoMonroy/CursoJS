async function fetchCharacterDetails() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const characterID = urlParams.get('id');

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterID}`);
        const character = await response.json();

        const detailContainer = document.getElementById('characterDetail');
        detailContainer.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image}">
            <p><strong>Especie: </strong>${character.species}</p>
            <p>${character.gender}</p>
            <p>${character.origin.name}</p>
        `;
    } catch (error) {
        console.log('Error bajando datos: ', error);
    }
}

fetchCharacterDetails();