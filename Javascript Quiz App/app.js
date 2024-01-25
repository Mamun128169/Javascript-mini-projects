const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text:"Lion", correct:false},
            {text:"Blue whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text:"Asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text:"Kalahari", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Antarctica", correct:true},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text:"Vatican City", correct:true},
            {text:"Bhutan", correct:false},
            {text:"Nepal", correct:false},
            {text:"Sri Lanka", correct:false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

const resetState = () => {
    nextBtn.style.display = "none";

    while (answerButtons.firstElementChild) {
        answerButtons.removeChild(answerButtons.firstElementChild);
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    let isCorrect = (selectedBtn.dataset.correct === "true");

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); 
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

const showQuestion = () => {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
    });
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

const quizEnded = () => {
    resetState();
    questionElement.innerHTML = `You have scored is "${score} / ${questions.length}"`;
    nextBtn.innerText = 'Restart Quiz';
    nextBtn.style.display = "block";
}

const handleNextBtn = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        quizEnded();
    }
}

startQuiz();