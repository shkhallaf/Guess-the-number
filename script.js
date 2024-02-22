var hieghest = 0;
var score = 20;
var randomNum = Math.floor(Math.random() * 20) + 1;
const setEnitials = () => {
  score = 20;
  randomNum = Math.floor(Math.random() * 20) + 1;
  changeTextContent("#hint", "Start guessing...");
  changeTextContent("#score", score);
  changeTextContent("#realNumber", "?");
  changeTextContent("#highestscore", hieghest);
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("#guessednumber").style.backgroundColor = "black";
  document.querySelector("#check").addEventListener("click", guessTheNumber);
  document.querySelector("#guessednumber").value = "";
  document.querySelector("#guessednumber").disabled = false;
};
const changeTextContent = (selector, text) => {
  document.querySelector(`${selector}`).textContent = text;
};
const playAgain = (event) => {
  setEnitials();
};
function guessTheNumber(event) {
  if (score > 0) {
    let gussedNum = Number(document.querySelector("#guessednumber").value);
    if (!gussedNum) {
      changeTextContent("#hint", "😥 No number!");
    } else if (gussedNum !== randomNum) {
      gussedNum > randomNum
        ? changeTextContent("#hint", "😥 Too High !")
        : changeTextContent("#hint", "😥 Too low !");
      score -= 1;
      document.querySelector("#score").textContent = score;
    } else {
      changeTextContent("#hint", "🎉 Correct Number !");
      document.querySelector("body").style.backgroundColor = "rgb(83, 163, 83)";
      document.querySelector("#guessednumber").style.backgroundColor =
        "rgb(83, 163, 83)";
      changeTextContent("#realNumber", randomNum);
      document
        .querySelector("#check")
        .removeEventListener("click", guessTheNumber);
      document.querySelector("#guessednumber").disabled = true;
      if (score > hieghest) {
        hieghest = score;
        changeTextContent("#highestscore", hieghest);
      }
    }
  } else {
    changeTextContent("#hint", "😭 Game Over!");
    document
      .querySelector("#check")
      .removeEventListener("click", guessTheNumber);
    document.querySelector("#guessednumber").disabled = true;
  }
}
setEnitials();
document.querySelector("#check").addEventListener("click", guessTheNumber);
document.querySelector("#again").addEventListener("click", playAgain);
