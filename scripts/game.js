//grabbing elements from html
const game = document.querySelector(".game");
const lives = document.querySelector(".lives");
//lives that player have to play with lose them when choosing wrong
const livesCount = 5;

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
    game.appendChild(front);
    game.appendChild(back);
  });
};

cardScreen();
