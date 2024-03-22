// // Uso XMLHttpRequest
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.loquesea.com/data", true);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var data = JSON.parse(xhr.responseText);
//         console.log(data);
//     }
// }
// xhr.send();

// // Usando Fetch API
// fetch("https://api.loquesea.com/data")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error", error));

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => createCharacterCards(data.results))
        .catch(error => console.error('Error:', error));
});

function createCharacterCards(characters) {
    const container = document.getElementById('charactersContainer');
    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        card.addEventListener('click', () => showCharacterModal(character));
        container.appendChild(card);
    });
}

function showCharacterModal(character) {
    const modal = document.getElementById('characterModal');
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}" style="width:50%">
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Estado:</strong> ${character.status}</p>
    `;
    modal.style.display = "block";

    const closeButton = document.querySelector('.close-button');
    closeButton.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}