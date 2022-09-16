//grabbing elements from html
const game = document.querySelector(".game");
const lives = document.querySelector(".lives");
//lives that player have to play with lose them when choosing wrong
const livesCount = 5;

//adding lives to page screen
lives.innerHTML = livesCount;
