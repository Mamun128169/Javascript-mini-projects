const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
            { text: "Madrid", correct: false },
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ]
    },
    {
        question: "Which famous scientist developed the theory of general relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1925", correct: false },
            { text: "1930", correct: false },
        ]
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Dolphin", correct: false },
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Vietnam", correct: false },
        ]
    },
    {
        question: "What is the currency of Brazil?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Dollar", correct: false },
            { text: "Real", correct: true },
            { text: "Peso", correct: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
        ]
    },
    {
        question: "What is the largest bird in the world?",
        answers: [
            { text: "Eagle", correct: false },
            { text: "Ostrich", correct: true },
            { text: "Pelican", correct: false },
            { text: "Hummingbird", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById('answer-btns');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
} 

const resetState = () => {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
} 

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = (selectedBtn.dataset.correct === "true");
    if (isCorrect) {
        score++;
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(btn => {
        if (btn.dataset.correct) {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    nextButton.style.display = "block";
}

const showQuestion = () => {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const currentQuestionNo = 1 + currentQuestionIndex;
    questionElement.innerHTML = `${currentQuestionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 

        if (answer.correct) {
            button.dataset.correct = "true";
        }
        
        button.addEventListener('click', selectAnswer)
    });
}

const handleNextButton = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        resetState();
        questionElement.innerHTML = `You have scored ${score} / ${questions.length}.`
        nextButton.innerHTML = `Restart Quiz`;
        nextButton.style.display = "block";
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();

