const quizData = [
    {
        question: "¿Cuál es el lenguaje de programación más utilizado en 2019?",
        a: "Java",
        b: "Go",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "¿Quién creó el lenguaje Java?",
        a: "Dennis Ritchie",
        b: "James Gosling",
        c: "Bill Gates",
        d: "Brendan Eich",
        correct: "b",
    },
    {
        question: "¿Qué significa HTML?",
        a: "Lenguaje de marcado de hipertexto",
        b: "Hoja de estilo en cascada",
        c: "Notación de objetos de Jason",
        d: "Helicópteros Terminales Lanchas Lamborginis",
        correct: "a",
    },
    {
        question: "¿En qué año se lanzó JavaScript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Ninguna de las anteriores",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Has respondido correctamente ${score}/${quizData.length} preguntas.</h2>
                
                <button onclick="location.reload()">Reiniciar</button>
            `;
        }
    }
});