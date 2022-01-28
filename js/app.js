class QuizGame {
    constructor() {
        // Theses are our default values and html elements we are grabbing from the dom
        this.currentQuestion = 0;
        this.nextQuestion = document.getElementById('nextQuestion');
        this.prevQuestion = document.getElementById('prevQuestion');
        this.answerButtons = document.querySelectorAll('.answer-button');
        this.questionNumber = document.getElementById('cardQuestionNum');
        this.image = document.getElementById('questionImg');
        this.question = document.getElementById('cardQuestion');
        this.results = document.getElementById('results');
        this.submitSection = document.getElementById('submitQuizSection');
        this.submitButton = document.querySelector('.submit-button');
        this.win = document.getElementById('win');
        this.fail = document.getElementById('fail');
        this.restartGame = document.getElementById('restartQuiz');
        let score = 0;
        this.rightAnswers = [];
        this.userAnswers = [];

        // Questions and answers for the quiz
        this.questions = [
            {
                img: 'media/question1.jpg',
                question: "What was the most popular girls name in the UK in 2019?",
                answers: {
                    A: "Sarah",
                    B: "Megan",
                    C: "Olivia",
                    D: "Claire"
                },
                correctAnswer: "C"
            },
            {
                img: 'media/question2.jpg',
                question: "Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
                answers: {
                    A: "Call of Duty",
                    B: "Fornite",
                    C: "Bob The Builder",
                    D: "Pokemon"
                },
                correctAnswer: "A"
            },
            {
                img: 'media/question3.jpg',
                question: "In what US State is the city Nashville?",
                answers: {
                    A: "Hawaii",
                    B: "Tennessee",
                    C: "California",
                    D: "New York"
                },
                correctAnswer: "B"
            },
            {
                img: 'media/question4.jpg',
                question: "What is the currency of Denmark?",
                answers: {
                    A: "Franks",
                    B: "Krone",
                    C: "Euros",
                    D: "Dollars"
                },
                correctAnswer: "B"
            },
            {
                img: 'media/question5.jpg',
                question: "What is the smallest planet in our solar system?",
                answers: {
                    A: "Pluto",
                    B: "Ethor",
                    C: "The Sun",
                    D: "Mercury"
                },
                correctAnswer: "D"
            },
            {
                img: 'media/question6.jpg',
                question: "Continental United States has 4 time zones, can you name them?",
                answers: {
                    A: "Left, Middle Left, Middle, Right",
                    B: "Central, Pacific, Eastern, California",
                    C: "Pacific, Mountain, Central, Eastern",
                    D: "Zulu"
                },
                correctAnswer: "C"
            },
            {
                img: 'media/question7.jpg',
                question: "Name the Coffee shop in US sitcom Friends",
                answers: {
                    A: "Central Perk",
                    B: "Coffee Shop",
                    C: "Brew For You",
                    D: "Morning Drip"
                },
                correctAnswer: "A"
            },
            {
                img: 'media/question8.jpg',
                question: "How many human players are there on each side in a polo match?",
                answers: {
                    A: "Six",
                    B: "Five",
                    C: "Seven",
                    D: "Four"
                },
                correctAnswer: "D"
            },
            {
                img: 'media/question9.jpg',
                question: "Which Disney Princess called Gus and Jaq friends?",
                answers: {
                    A: "Snow White",
                    B: "Cinderella",
                    C: "Ariel",
                    D: "Belle"
                },
                correctAnswer: "B"
            },
            {
                img: 'media/question10.jpg',
                question: "How many permanent teeth does a dog have?",
                answers: {
                    A: "36",
                    B: "40",
                    C: "38",
                    D: "42"
                },
                correctAnswer: "D"
            },
            {
                img: 'media/question11.jpg',
                question: "On average how far away is the moon from the earth in miles?",
                answers: {
                    A: "250,000",
                    B: "238,000",
                    C: "249,000",
                    D: "200,000"
                },
                correctAnswer: "B"
            },
            {
                img: 'media/question12.jpg',
                question: "Which country in the world is believed to have the most miles of motorway?",
                answers: {
                    A: "China",
                    B: "Germany",
                    C: "Finland",
                    D: "England"
                },
                correctAnswer: "A"
            },
            {
                img: 'media/question13.jpg',
                question: "What are the five colours of the Olympic rings?",
                answers: {
                    A: "Blue, Green, Red, Black, Orange",
                    B: "Blue, Yellow, White, Black, Red",
                    C: "Blue, Green, Pink, Black, Red",
                    D: "Blue, Yellow, Black, Green and Red"
                },
                correctAnswer: "D"
            },
            {
                img: 'media/question14.jpg',
                question: "The Simpsons was the spin-off show of which American sketch series?",
                answers: {
                    A: "Batman",
                    B: "The Office",
                    C: "The Tracey Ullman Show",
                    D: "Pokemon"
                },
                correctAnswer: "C"
            },
            {
                img: 'media/question15.jpg',
                question: "Which color pill does Neo swallow in The Matrix?",
                answers: {
                    A: "Blue",
                    B: "Green",
                    C: "Red",
                    D: "Yellow"
                },
                correctAnswer: "C"
            }
        ];

        // Adding an event listener to each answer button. Disabling the buttons when you choose an answer.
        this.answerButtons.forEach(el => {
            el.addEventListener('click', (e) => {
                this.userAnswers.push(e.target.id);
                this.answerButtons.forEach(item => {
                    item.disabled = true;
                });
                // Once the user has answered all questions this will state the quiz is finished and show the submit button
                if (this.userAnswers.length == 15) {
                    this.submitSection.classList.remove('d-none')
                };
            })
        });

        // This is our next button event listener this is populating the questions after you hit next question and re-enabling the answer buttons.
        this.nextQuestion.addEventListener('click', () => {
            this.currentQuestion++;
            if (this.currentQuestion >= this.questions.length) {
                
            } else {
                this.answerButtons.forEach(el => {
                    el.disabled = false;
                });
                this.buildQuiz();
            }
        });

        // Event listener for submit button. This will do multiple things when submit is clicked
        this.submitButton.addEventListener('click', () => {
            // Show the results section with answers chosen, correct answers and score
            this.results.classList.remove('d-none');
            // This will remove the "game card" that displays questions, answers and next button
            cardBody.classList.add('d-none');
            // This will remove the submit section
            this.submitSection.classList.add('d-none');
            // Show the restart button
            restartQuiz.classList.remove('d-none');
            // Loop through the correctAnswer(s) and push them to rightAnswers
            for (let r = 0; r < 15; r++) {
                this.rightAnswers.push(this.questions[r].correctAnswer)
            };
            // Give a point if the user selected the right answer
            for (let p = 0; p < 15; p++) {
                if (this.userAnswers[p] === this.rightAnswers[p]) {
                    score++
                }
            };
            // Show the win gif if user score is 8 or greater else show the fail gif
            if (score >= 8) {
                this.win.classList.remove('d-none')
            } else if (score <= 7) {
                this.fail.classList.remove('d-none')
            };
            // This will add the HTML written below to the page and display the answers chosen, the right answers and the "score"
            this.results.innerHTML = `
            <div>
                <p class="your-answers">The answers you chose:</p>
                <span class="answer-list">${this.userAnswers}</span>
            </div>
            <div>
                <p class="correct-answers">The correct answers:</p>
                <span class="answer-list">${this.rightAnswers}</span>
            </div>
            <div>
                <p class="your-score-text">Your score:</p>
                <span class="score-outcome">${score} out of 15 correct</span>
            </div>
            `
        })
        
    };

    init() {
        this.buildQuiz();
        this.startQuiz();
        this.restartQuiz();
    };

    buildQuiz() {
        // Pick the questions in order and modify the answer buttons
        this.cardQuestionNum = this.currentQuestion;
        this.image.src = this.questions[this.currentQuestion].img;
        this.question.innerText = this.questions[this.currentQuestion].question;
        this.answerButtons[0].innerText = this.questions[this.currentQuestion].answers.A;
        this.answerButtons[1].innerText = this.questions[this.currentQuestion].answers.B;
        this.answerButtons[2].innerText = this.questions[this.currentQuestion].answers.C;
        this.answerButtons[3].innerText = this.questions[this.currentQuestion].answers.D
    };

    startQuiz() {
        // Create a variable for the start button
        let start = document.querySelector('.start-quiz');
        let cardBody = document.getElementById('cardBody');
        // Event listener for when the start button is clicked to then show the "game card"
        start.addEventListener('click', () =>{
            cardBody.classList.remove('d-none');
            header.classList.add('d-none')
        })
    };

    restartQuiz() {
        // Create a variable for the restart button
        let restart = document.querySelector('.restart-quiz');
        // Event listener for when the restart button is clicked
        restart.addEventListener('click', () => {
            location.reload();
        })
    };
}

let action = new QuizGame();
action.init();