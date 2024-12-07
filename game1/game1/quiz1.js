let score = 0;  // Initialize score
let currentQuestion = 0;  // Track the current question
let answeredQuestions = [];  // Track answered questions to prevent multiple answers for the same question
let questions = [
    {
        question: "What is the normal body temperature for a human?",
        options: ["36.1°C", "37.0°C", "39.0°C", "40.0°C"],
        correctAnswer: 1,  // Correct answer is at index 1
    },
    {
        question: "What is the recommended daily water intake?",
        options: ["2 liters", "3 liters", "1.5 liters", "4 liters"],
        correctAnswer: 0,  // Correct answer is at index 0
    },
    {
        question: "How many hours should an adult sleep?",
        options: ["5 hours", "6 hours", "7-9 hours", "10 hours"],
        correctAnswer: 2,  // Correct answer is at index 2
    },
    // Add more questions here
];

document.addEventListener("DOMContentLoaded", function() {
    displayQuestion();
});

function displayQuestion() {
    let question = questions[currentQuestion];
    let questionElement = document.getElementById("question");
    let optionsContainer = document.getElementById("options-container");

    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";  // Clear previous options

    question.options.forEach((option, index) => {
        let optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.setAttribute("data-index", index);
        optionElement.addEventListener("click", checkAnswer);
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(event) {
    let selectedOption = event.target;
    let selectedIndex = parseInt(selectedOption.getAttribute("data-index"));
    let question = questions[currentQuestion];

    // Ensure we only process the answer once for each question
    if (answeredQuestions.includes(currentQuestion)) {
        return;  // Prevent processing if the question has already been answered
    }

    // Mark this question as answered
    answeredQuestions.push(currentQuestion);

    // Reset option styles
    let options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.classList.remove("correct", "incorrect");
    });

    // Check if the selected answer is correct
    if (selectedIndex === question.correctAnswer) {
        score += 1; // Increment score by 1 if correct
        selectedOption.classList.add("correct");  // Highlight the correct option
    } else {
        selectedOption.classList.add("incorrect");  // Highlight the incorrect option
        options[question.correctAnswer].classList.add("correct");  // Highlight the correct answer
    }

    // Proceed to the next question after a delay (1 second)
    setTimeout(() => {
        currentQuestion += 1;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showFinalScore();
        }
    }, 1000);
}

function showFinalScore() {
    let endScreen = document.getElementById("end-screen");
    let scoreCircle = document.getElementById("score-circle");
    endScreen.classList.add("visible");
    scoreCircle.textContent = `Score: ${score}`;
}
