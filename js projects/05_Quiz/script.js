document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});

//finishedddddddddddddd
document.addEventListener("DOMContentLoaded", () => {
  // Grab buttons from the DOM
  const startBtn = document.getElementById("start-btn"); // Start quiz button
  const nextBtn = document.getElementById("next-btn"); // Next question button
  const restartBtn = document.getElementById("restart-btn"); // Restart quiz button

  // Grab containers and text elements
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  // Quiz questions stored as an array of objects
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  // Tracks which question is currently being shown
  let currentQuestionIndex = 0;
  // Stores number of correct answers
  let score = 0;

  // Start quiz when start button is clicked
  startBtn.addEventListener("click", startQuiz);

  // Move to next question when next button is clicked
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++; // Move to next question index

    // If questions are still left, show next question
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    }
    // If no questions left, show result
    else {
      showResult();
    }
  });

  // Restart quiz when restart button is clicked
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0; // Reset question index
    score = 0; // Reset score
    resultContainer.classList.add("hidden"); // Hide result section
    startQuiz(); // Start quiz again
  });

  // Starts the quiz
  function startQuiz() {
    startBtn.classList.add("hidden"); // Hide start button
    resultContainer.classList.add("hidden"); // Hide result section
    questionContainer.classList.remove("hidden"); // Show question section
    showQuestion(); // Display first question
  }

  // Displays the current question and its choices
  function showQuestion() {
    nextBtn.classList.add("hidden"); // Hide next button until answer is selected

    // Set question text from current question object
    questionText.textContent = questions[currentQuestionIndex].question;

    // Clear old choices before adding new ones
    choicesList.innerHTML = "";

    // Loop through all choices for current question
    questions[currentQuestionIndex].choices.forEach((choice) => {
      // Create a list item for each choice
      const li = document.createElement("li");

      // Set choice text
      li.textContent = choice;

      // When a choice is clicked, check if it is correct
      li.addEventListener("click", () => selectAnswer(choice));

      // Add choice to the list
      choicesList.appendChild(li);
    });
  }

  // Checks whether selected answer is correct
  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer; // Get correct answer

    // Increase score if selected answer is correct
    if (choice === correctAnswer) {
      score++;
    }

    // Show next button after an answer is selected
    nextBtn.classList.remove("hidden");
  }

  // Displays final result
  function showResult() {
    questionContainer.classList.add("hidden"); // Hide question section
    resultContainer.classList.remove("hidden"); // Show result section

    // Display final score
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
