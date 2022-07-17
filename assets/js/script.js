// create variables
var startButton = document.querySelector('#start-bttn');

var nextButton = document.querySelector('#next-bttn');

var questionBoxEl = document.querySelector('#question-box');

let randomQuestions, currentQuestionIndex

var questionEl = document.querySelector('#question');

var answerButtonEl = document.querySelector('#answer-buttons');

var startTime = 1

let time = startTime * 60;

var timerEl = document.getElementById('timer');






// make function for starting the quiz
function startQuiz() {

    console.log('started')

    setInterval(countDown, 1000);

    startButton.classList.add('hide')

    randomQuestions = questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0

    questionBoxEl.classList.remove('hide')

    

    nextQuestion()


}

// make function for when you go to the next question
function nextQuestion() {

    reset();

    showQuestion(randomQuestions[currentQuestionIndex])


}

// make a function to show question
function showQuestion(question) {

    questionEl.innerText = question.question

    question.answers.forEach(answer => {

        var button = document.createElement('button')

        button.innerText = answer.text

        button.classList.add('bttn')

        if (answer.correct) {

            button.dataset.correct = answer.correct

        }

        button.addEventListener('click', selAnswer)

        answerButtonEl.appendChild(button)

    })


}

// make a function to reset for next question
function reset() {

    nextButton.classList.add('hide')

    while (answerButtonEl.firstChild) {

        answerButtonEl.removeChild(answerButtonEl.firstChild)

    }
}

// make a function for selecting an answer
function selAnswer(event) {

    var selButton = event.target

    var correct = selButton.dataset.correct

    setStatusClass(document.body, correct)

    Array.from(answerButtonEl.children).forEach(button => {

        setStatusClass(button, button.dataset.correct)

    })

    if (randomQuestions.length > currentQuestionIndex + 1){

        nextButton.classList.remove('hide')

    } else {

        startButton.innerText = 'Restart'

        startButton.classList.remove('hide')

    }

   


}

function setStatusClass(element, correct) {

    clearStatusClass(element)

    if (correct) {

        element.classList.add('correct')

    } else {

        element.classList.add('incorrect'
        )
    }
}

function clearStatusClass(element) {

    element.classList.remove('correct')

    element.classList.remove('incorrect')

}

// create array of questions along with the possible answers
var questions = [

    {

        question: 'JavaScript syntax defines how many types of values?',

        answers: [

            { text: '1', correct: false },

            { text: '2', correct: true },

            { text: '3', correct: false },

            { text: '4', correct: false }

        ]

    },

    {

        question: 'An equal sign is used to do what in JavaScript?',

        answers: [

            { text: 'declare variables', correct: false },

            { text: 'store data', correct: false },

            { text: 'evaluate a value', correct: false },

            { text: 'assign values', correct: true }

        ]

    }
]

function countDown() {

    var minutes = Math.floor(time / 60);

    var seconds = minutes * 60;

    seconds = seconds < 1 ? '0' + seconds : seconds;

    timerEl.innerHTML = minutes + ":" + seconds;

    time--;
}

function endQuiz() {


}


startButton.addEventListener('click', startQuiz)

nextButton.addEventListener('click', () => {

    currentQuestionIndex++

    nextQuestion()

})



