const quizQuestions = [
    {
        question: "What is the recommended amount of water you should drink daily?",
        options: ["5 cups", "8 cups", "10 cups", "12 cups"],
        answer: 1, // Index of correct answer
    },
    {
        question: "What is the most important vitamin for immune health?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        answer: 1,
    },
    {
        question: "Which exercise is best for building muscle strength?",
        options: ["Jogging", "Swimming", "Weight Lifting", "Cycling"],
        answer: 2,
    },
    {
        question: "How many hours of sleep is recommended for adults?",
        options: ["5-6 hours", "6-7 hours", "7-9 hours", "9-10 hours"],
        answer: 2,
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let lastLoginDate = localStorage.getItem('lastLoginDate') || null;
let today = new Date().toLocaleDateString(); // Today's date as a string (for comparison)
let timer = 30;
let quizInterval;

function checkStreak() {
    // Check if the user logged in on consecutive days
    if (lastLoginDate !== today) {
        if (lastLoginDate) {
            // Reset streak if it's not consecutive
            streak = 0;
        }
        // Set today's date as the last login date
        localStorage.setItem('lastLoginDate', today);
        streak++; // Increment streak for today's participation
    }
}

function displayQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    const options = document.querySelectorAll(".option");

    questionData.options.forEach((option, index) => {
        options[index].textContent = option;
        options[index].classList.remove('incorrect', 'correct'); // Remove any previous styles
    });

    document.getElementById("timer").textContent = timer;
    startTimer();
}

function startTimer() {
    clearInterval(quizInterval);
    quizInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timer").textContent = timer;
        } else {
            clearInterval(quizInterval);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

    const options = document.querySelectorAll(".option");

    if (selectedOption === correctAnswer) {
        // Correct answer logic
        score++;
        options[selectedOption].classList.add('correct');
    } else {
        // Incorrect answer logic
        options[selectedOption].classList.add('incorrect');
        options[correctAnswer].classList.add('correct'); // Highlight the correct answer
    }

    // Update the score in the side box
    document.getElementById("score").textContent = score;
    document.getElementById("streak").textContent = streak;

    // Show the "Next Question" button
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
        document.getElementById("next-button").style.display = "none";
        timer = 30; // Reset timer
    } else {
        alert("Quiz Complete! Your final score: " + score + " with streak: " + streak);
        // You can add a reset or end screen here
    }
}

checkStreak(); // Check the streak status on every login
displayQuestion(); // Initialize the first question
