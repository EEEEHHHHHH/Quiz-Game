/*
░██████╗░██╗░░░██╗██╗███████╗░░░░░░░██████╗░░█████╗░███╗░░░███╗███████╗
██╔═══██╗██║░░░██║██║╚════██║░░░░░░██╔════╝░██╔══██╗████╗░████║██╔════╝
██║██╗██║██║░░░██║██║░░███╔═╝█████╗██║░░██╗░███████║██╔████╔██║█████╗░░
╚██████╔╝██║░░░██║██║██╔══╝░░╚════╝██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░
░╚═██╔═╝░╚██████╔╝██║███████╗░░░░░░╚██████╔╝██║░░██║██║░╚═╝░██║███████╗
░░░╚═╝░░░░╚═════╝░╚═╝╚══════╝░░░░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝

Daniel Moshi, Noah Månsson Persson, Ramin Samadi
https://github.com/EEEEHHHHHH/Quiz-Game/blob/main/script.js
NAME: script.js
DESC: JavaScript code that displays if the result of the selected radios are correct or wrong.
*/

function getResult() {
  const radios = document.querySelectorAll('input[type="radio"]');
  const result = document.getElementById("result");
  let correctAnswers = 0;

  radios.forEach((radio) => {
    const radioIsCorrect = radio.classList.contains("correct");
    const radioIsSelected = radio.checked;
    const radioStyle = radio.parentNode.classList;
    radioStyle.remove("wrong");
    radioStyle.remove("correct");

    if (radioIsSelected && radioIsCorrect) {
      correctAnswers++;
      radioStyle.add("correct");
    } else if (radioIsSelected && !radioIsCorrect) {
      radioStyle.add("wrong");
    }
  });

  result.textContent = `Result: ${correctAnswers}/${radios.length/4}`;
}

function previewAnswers() {
  const correctRadios = document.querySelectorAll('input[type="radio"].correct');

  correctRadios.forEach((radio) => {
    radio.checked = true;
  });

  getResult();
}
