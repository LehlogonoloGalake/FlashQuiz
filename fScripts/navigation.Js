 // Function to handle the quiz button click

 function startQuiz() {

    var quizPageLink = 'SimpleQuiz.html';
    window.location.href = quizPageLink;
    
}

// Attach the function to the button click event
var quizButton = document.getElementById('quizButton');
quizButton.addEventListener('click', startQuiz);
