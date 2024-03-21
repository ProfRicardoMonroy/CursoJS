const preguntas = [
    {
        "question": "¿Quién descubrió America?",
        "options": ["Rambo", "AMLO", "Cristobal Colón", "Esteban López"],
        "correctAnswer": 2
    },
    {
        "question": "¿Cuál es la estrella mas grande del sistema solar?",
        "options": ["La luna", "Luis Miguel", "Júpiter", "El Sol"],
        "correctAnswer": 1
    },
    {
        "question": "¿A que saben las alas de puerco?",
        "options": ["Puerco", "Pollo", "Los puercos no tienen alas", "Vaca"],
        "correctAnswer": 2
    },
    {
        "question": "¿Cuál es el pais más grande del mundo?",
        "options": ["El Vaticano", "EEUU", "Haiti", "Rusia"],
        "correctAnswer": 3
    },
    {
        "question": "¿Cuantos años duró la guerra de los 100 años?",
        "options": ["102", "100", "99", "1000"],
        "correctAnswer": 0
    },
];

const form = document.getElementById('cuestionarioForm');
const preguntasContainer = document.getElementById('preguntasContainer');
const resultado = document.getElementById('resultado');
const reiniciar = document.getElementById('reiniciar');

function mostrarPreguntas() {
    preguntas.forEach((pregunta, indicePregunta) => {
        const preguntaDiv = document.createElement('div');
        preguntaDiv.innerHTML = `<p><strong>${pregunta.question}</strong></p>`;

        pregunta.options.forEach((opcion, indiceOpcion) => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="pregunta${indicePregunta}" value="${indiceOpcion}"> ${opcion}`;
            preguntaDiv.appendChild(label);
        })

        preguntasContainer.appendChild(preguntaDiv);
    })
}

function calcularCalificacion(event) {
    event.preventDefault();
    let calificacion = 0;
    preguntas.forEach((pregunta, indicePregunta) => {
        const respuestaSeleccionada = form[`pregunta${indicePregunta}`].value;
        if (respuestaSeleccionada == pregunta.correctAnswer) {
            calificacion++;
        }
    });

    const nombre = document.getElementById('nombre').value;
    resultado.innerHTML = `${nombre}, tu calificación es: ${calificacion} de ${preguntas.length}`;
    form.style.display = 'none';
    reiniciar.style.display = 'block';
}

function reiniciarCuestionario() {
    form.reset();
    form.style.display = 'block';
    resultado.innerHTML = '';
    reiniciar.style.display = 'none';
}

form.addEventListener('submit', calcularCalificacion);
reiniciar.addEventListener('click', reiniciarCuestionario);

mostrarPreguntas();