const quizData = [
    {
        question: "Which city in India is called the 'pink city'?",
        a: "Mumbai",
        b: "Chennai",
        c: "Hyderabad",
        d: "Jaipur",
        correct: "d",
    },
    {
        question: "Which continent has the highest number of countries?",
        a: "Asia",
        b: "Europe",
        c: "Africa",
        d: "North America",
        correct: "c",
    },
    {
        question: "Total number of oceans in the world is?",
        a: "3",
        b: "5",
        c: "7",
        d: "12",
        correct: "b",
    },
    {
        question: "Which one is the biggest island in the World?",
        a: "Greenland",
        b: "Finland",
        c: "Sumatra",
        d: "Borneo",
        correct: "a",
    },
    {
        question: "Which country is known as the 'Land of Thousand Lakes?",
        a: "Austria",
        b: "Finland",
        c: "Switzerland",
        d: "Italy",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.submit()">submit</button>
           `
       }
    }
})