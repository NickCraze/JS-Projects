const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.innerText = colors[randomNumber];// can use innerText or textContent
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
