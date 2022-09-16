//grabbing elements from html
const game = document.querySelector(".game");
const lives = document.querySelector(".lives");
//lives that player have to play with lose them when choosing wrong
const livesCount = 5;

//first click
let c1;

let c2;

//adding lives to page screen
lives.textContent = livesCount;
//all images of languages
const images = [
  "../images/C_Programming_Language.svg",
  "../images/Python-logo-notext.svg",
  "../images/Unofficial_JavaScript_logo.svg",
  "../images/C_Programming_Language.svg",
  "../images/Python-logo-notext.svg",
  "../images/Unofficial_JavaScript_logo.svg",
];
//function to randomize images in cards
const randomize = () => {
  return images.sort(() => Math.random() - 0.5);
};

//generate cards on screen
const cardScreen = () => {
  const cardPic = randomize();
  cardPic.forEach((element) => {
    const card = document.createElement("div");
    const front = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    front.classList = "front";
    back.classList = "back";
    //adding image to the card
    front.src = element;
    //adding cards to game section
    game.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.onclick = () => {
      card.classList.toggle("toggle");
      check(card);
    };
  });
};

//function to check if cards have the same pic
const check = (x) => {
  console.log(x);
  const clicked = x;
  x.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");

  if (flippedCards.length === 2) {
    if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
      console.log("match");
      flippedCards[0].classList.remove("flipped");
      flippedCards[1].classList.remove("flipped");
    } else {
      console.log("wrong");
      flippedCards.forEach((element) => {
        element.classList.remove("flipped");
        setTimeout(() => element.classList.remove("toggle"), 500);
      });
    }
  }
};

cardScreen();
