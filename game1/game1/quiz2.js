let questions = [
    {
        question: "What is the recommended duration of daily exercise for adults?",
        options: ["10 minutes", "30 minutes", "60 minutes", "90 minutes"],
        correct: 1
    },
    {
        question: "Which of these is a form of cardiovascular exercise?",
        options: ["Weightlifting", "Running", "Yoga", "Pilates"],
        correct: 1
    },
    {
        question: "Which nutrient is most important for muscle growth?",
        options: ["Carbohydrates", "Fats", "Protein", "Vitamins"],
        correct: 2
    },
    {
        question: "What is the best time to drink water during a workout?",
        options: ["Before and during", "After only", "During only", "Before only"],
        correct: 0
    },
    {
        question: "How often should adults engage in strength training exercises?",
        options: ["Once a week", "Twice a week", "Three times a week", "Every day"],
        correct: 1
    },
    {
        question: "Which exercise is best for improving flexibility?",
        options: ["Running", "Stretching", "Cycling", "Swimming"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let streakBonusThreshold = 5;
let timer = 30;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        timer--;
        document.getElementById("timer").innerText = timer;
        if (timer === 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;

    let options = document.querySelectorAll(".option");
    options.forEach((button, index) => {
        button.innerText = question.options[index];
        button.classList.remove("correct", "incorrect"); // Reset button styles
        button.disabled = false; // Enable all buttons
    });

    document.getElementById("next-button").style.display = "none"; // Hide the next button initially
    document.getElementById("streak-message").innerText = ""; // Clear streak message
    startTimer();
}

function checkAnswer(selectedIndex) {
    let question = questions[currentQuestionIndex];
    let options = document.querySelectorAll(".option");

    options.forEach(button => (button.disabled = true)); // Disable buttons after selection

    if (selectedIndex === question.correct) {
        score++;
        streak++;
        options[selectedIndex].classList.add("correct");

        // Display streak message and bonus
        if (streak % streakBonusThreshold === 0) {
            score += 2; // Bonus points for reaching a streak milestone
            document.getElementById("streak-message").innerText = `🔥 Streak Bonus! You've earned 2 extra points!`;
        } else if (streak > 1) {
            document.getElementById("streak-message").innerText = `Keep it up! Streak: ${streak} 🔥`;
        }
    } else {
        streak = 0; // Reset streak on incorrect answer
        options[selectedIndex].classList.add("incorrect");
        document.getElementById("streak-message").innerText = "Oops! Streak reset 😢";
    }

    document.getElementById("score").innerText = score;
    document.getElementById("streak").innerText = streak;

    clearInterval(timerInterval);
    document.getElementById("next-button").style.display = "inline-block"; // Show the next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    document.getElementById("quiz-container").style.display = "none"; // Hide quiz container
    let finalScore = document.getElementById("final-score");
    finalScore.innerText = score; // Display the final score
    document.getElementById("end-screen").classList.add("visible"); // Show the end screen
}

// Initial call to load the first question
loadQuestion();
