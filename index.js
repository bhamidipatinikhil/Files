const quizData = [
    {
        question: "Which of the following is the capital of Arunachal Pradesh'?",
        a: "Itanagar",
        b: "Dispur",
        c: "Imphal",
        d: "Panaji",
        correct: "a",
    },
    {
        question: "Which is the largest coffee-producing state of India?",
        a: "Kerala",
        b: "Tamil Nadu",
        c: "Karnataka",
        d: "Rajasthan",
        correct: "c",
    },
    {
        question: "Which is the Capital of Mizoram?",
        a: "Aizawl",
        b: "Jaipur",
        c: "Gangtok",
        d: "Khawzawl",
        correct: "a",
    },
    {
        question: "Which state has the largest area?",
        a: "Maharashtra",
        b: "Madhya Pradesh",
        c: "Uttar Pradesh",
        d: "Rajasthan",
        correct: "d",
    },
    {
        question: "Which is the national sport of india?",
        a: "Cricket",
        b: "Hockey",
        c: "Football",
        d: "Kho-Kho",
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