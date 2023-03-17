function getResult() {
    let correctAnswers = 0;    

    for (let i = 0; i < radios.length; i++) {
        if (document.querySelectorAll('input[type="radio"].correct')[i].checked && document.querySelector('input[type="radio"].correct').checked) {
            correctAnswers++;
        };
    };
    document.getElementById("result").textContent = correctAnswers;
};