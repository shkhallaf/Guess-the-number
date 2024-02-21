"use strict";
var hieghest = 0;
document.querySelector("#highestscore").textContent = hieghest;
function play() {
  document.querySelector("#hint").textContent = "Start guessing...";
  var score = 20;
  document.querySelector("#score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("#guessednumber").style.backgroundColor = "black";
  document.querySelector("#realNumber").textContent = "?";
  document.querySelector("#check").addEventListener("click", guessTheNumber);
  document.querySelector("#guessednumber").value = "";
  document.querySelector("#guessednumber").disabled = false;
  var randomNum = Math.floor(Math.random() * 20) + 1;
  console.log(randomNum);
  function guessTheNumber(event) {
    if (score > 0) {
      let gussedNum = document.querySelector("#guessednumber").value;
      if (!gussedNum) {
        document.querySelector("#hint").textContent = "😥 No number!";
      } else if (gussedNum > randomNum) {
        document.querySelector("#hint").textContent = "😥 Too High !";
        score -= 1;
        document.querySelector("#score").textContent = score;
      } else if (gussedNum < randomNum) {
        document.querySelector("#hint").textContent = "😥 Too low !";
        score -= 1;
        document.querySelector("#score").textContent = score;
      } else {
        document.querySelector("#hint").textContent = "🎉 Correct Number !";
        document.querySelector("body").style.backgroundColor =
          "rgb(83, 163, 83)";
        document.querySelector("#guessednumber").style.backgroundColor =
          "rgb(83, 163, 83)";
        document.querySelector("#realNumber").textContent = randomNum;
        document
          .querySelector("#check")
          .removeEventListener("click", guessTheNumber);
        document.querySelector("#guessednumber").disabled = true;
        if (score > hieghest) {
          hieghest = score;
          document.querySelector("#highestscore").textContent = hieghest;
        }
      }
    } else {
      document.querySelector("#hint").textContent = "😭 Game Over!";
      document
        .querySelector("#check")
        .removeEventListener("click", guessTheNumber);
      document.querySelector("#guessednumber").disabled = true;
    }
  }
  document.querySelector("#check").addEventListener("click", guessTheNumber);
}
play();
document.querySelector("#again").addEventListener("click", play);
