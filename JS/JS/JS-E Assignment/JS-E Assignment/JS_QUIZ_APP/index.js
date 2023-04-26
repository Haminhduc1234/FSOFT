const myQuestion =
    [
        {
            question: 'Javascript is _____________ language',
            answers: {
                a: 'Programing',
                b: 'Application',
                c: 'None of These',
                d: 'Scripting'
            },
            multi: false,
            correctAnswer: 'd'
        },
        {
            question: 'Which of the following is a valid type of function javascript supports ?',
            answers: {
                a: 'Named function',
                b: 'Anonymous function',
                c: 'Both of the both',
                d: 'None of the both'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Which built-in method returns the index within the calling string object of the first occurrence of the specified value ? ',
            answers: {
                a: 'getIndex()',
                b: 'location()',
                c: 'indexOf()',
                d: 'getLocation()'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Which one of the following is valid data type of Javascript ? ',
            answers: {
                a: 'Number',
                b: 'Void',
                c: 'Boolean',
                d: 'Nothing'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Trong Javascript sự kiện OnUnload thực hiện khi nào?',
            answers: {
                a: 'Khi bắt đầu chạy chương trình',
                b: 'Khi click chuột',
                c: 'Khi kết thúc 1 chương trình',
                d: 'Khi di chuyển chuột qua'
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            question: 'Thẻ textarea dùng để làm gì?',
            answers: {
                a: 'Tạo một ô text để nhập dữ liệu 1 dòng',
                b: 'Tạo 1 ô password',
                c: 'Tạo 1 textbox cho phép nhập liệu nhiều dòng',
                d: 'Tất cả các đáp án trên'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Which of the following is a valid type of function javascript supports ?',
            answers: {
                a: 'None of These',
                b: 'Scripting',
                c: 'Programing',
                d: 'Named Function'
            },
            multi: false,
            correctAnswer: 'b'
        },
        {
            question: 'Trong Javascript sự kiện OnUnload thực hiện khi nào?',
            answers: {
                a: 'Khi bắt đầu chạy chương trình',
                b: 'Khi click chuột',
                c: 'Khi kết thúc 1 chương trình',
                d: 'Khi di chuyển chuột qua'
            },
            multi: false,
            correctAnswer: 'a'
        },
        {
            question: 'Which of the following is a valid type of function javascript supports ?',
            answers: {
                a: 'Named function',
                b: 'Anonymous function',
                c: 'Both of the both',
                d: 'None of the both'
            },
            multi: false,
            correctAnswer: 'c'
        },
        {
            question: 'Which built-in method returns the index within the calling string object of the first occurrence of the specified value ? ',
            answers: {
                a: 'getIndex()',
                b: 'location()',
                c: 'indexOf()',
                d: 'getLocation()'
            },
            multi: false,
            correctAnswer: 'c'
        },
    ];



const start__Btn = document.querySelector('.start__btn');
const next__Btn = document.querySelector('.btn__next');
const pre__Btn = document.querySelector('.btn__pre');
const sub__Btn = document.querySelector('.btn__submit');
const container = document.querySelector('.container');
// Start click
start__Btn.onclick = () => {
    container.classList.add('active__container');
    start__Btn.classList.add('hide');
    next__Btn.classList.remove('hide');
}
next__Btn.onclick = () => {
    handleNextQuestion();
    if(indexQuestion > 0) {
        document.querySelector('.btn__pre').classList.remove('hide');
    }
    console.log(playerScore);
}

pre__Btn.onclick = () => {
    handlePreQuestion();
    console.log(playerScore);

}

let questionNumber = 1;
let playerScore = 0;
let wrongAns = 0;
let indexQuestion = 0;


let shuffledQuestion = [];
let handleQuestion = function () {
    while (shuffledQuestion.length <= myQuestion.length - 1) {
        const random = myQuestion[Math.floor(Math.random() * myQuestion.length)];
        if (!shuffledQuestion.includes(random)) {
            shuffledQuestion.push(random);
        }
    }
}

let NextQuestion = function (index) {

    handleQuestion();
    const currentQuestion = shuffledQuestion[index];
    document.getElementById("question__number").innerHTML = questionNumber;
    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("option-1-label").innerHTML = currentQuestion.answers.a;
    document.getElementById("option-2-label").innerHTML = currentQuestion.answers.b;
    document.getElementById("option-3-label").innerHTML = currentQuestion.answers.c;
    document.getElementById("option-4-label").innerHTML = currentQuestion.answers.d;
}

let checkAnswer = function () {
    const currentQuestion = shuffledQuestion[indexQuestion];
    const currentQuestionAnswer = currentQuestion.correctAnswer;
    const options = document.getElementsByName('option');
    options.forEach((option) => {
        if (option.checked && option.value === currentQuestionAnswer) {
            playerScore++;
            indexQuestion++;
            questionNumber++;
        }
        else if (option.checked && option.value != currentQuestionAnswer) {
            wrongAns++;
            indexQuestion++;
            questionNumber++;
        }

    })

}
let checkAnswerPr = function () {
    const currentQuestion = shuffledQuestion[indexQuestion];
    const currentQuestionAnswer = currentQuestion.correctAnswer;
    const options = document.getElementsByName('option');
    options.forEach((option) => {
        if (option.checked && option.value === currentQuestionAnswer) {
            playerScore++;
            indexQuestion--;
            questionNumber--;
        }
        else if (option.checked && option.value != currentQuestionAnswer) {
            wrongAns++;
            indexQuestion--;
            questionNumber--;
        }

    })

}
let handleNextQuestion = function () {
    console.log(indexQuestion);
    checkAnswer();
    unCheckRadioButtons(indexQuestion);
    
    if (indexQuestion <= 9) {
        NextQuestion(indexQuestion)
    }
    else {
        handleEndGame();

    }
}
let handlePreQuestion = function () {
    if(indexQuestion > 0) {
        indexQuestion--;
        questionNumber--;
        NextQuestion(indexQuestion);
        checkAnswerPr();
        unCheckRadioButtons();

    }
}


let unCheckRadioButtons = function () {
    const options = document.getElementsByName('option');
    for (let i = 0 ; i < options.length; i++) {
        options[i].checked = false;
    }


}

let handleEndGame = function () {
    let message = null;
    if (playerScore <= 3) {
        message = "Bad Grades, Keep Practicing."
        messageColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        message = "Average Grades, You can do better."
        messageColor = "orange"
    }
    else if (playerScore >= 7) {
        message = "Excellent, Keep the good work going."
        messageColor = "green"
    }
    document.querySelector('.endGame').textContent = message;
    document.querySelector('.endGame').style.color = messageColor;
    document.getElementById("player__score").textContent = playerScore;
    document.querySelector('#wrong__answer').textContent = wrongAns;
    document.querySelector('.container__end').style.display = 'flex';

}

let closeEndGameModal = function() {
    questionNumber = 1;
    playerScore = 0;
    wrongAns = 0;
    indexQuestion = 0;
    shuffledQuestion = [];
    NextQuestion(indexQuestion);
    document.querySelector('.container__end').style.display = 'none';
}





