let quotesArray = [
  {
    quote: "The purpose of our lives is to be happy.",
    author: "- Dalai Lama",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "- John Lennon",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "- Stephen King",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "- Mae West",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "- Thomas A. Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "- Albert Einstein",
  },
  {
    quote:
    "Never let the fear of striking out keep you from playing the game.",
    author: "- Babe Ruth",
  },
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "- Will Smith",
  },
  {
    quote:
      "Not how long, but how well you have lived is the main thing.",
    author: "- Seneca",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "- Eleanor Roosevelt",
  },
  {
    quote:
      "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    author: "- Henry Ford",
  },
  {
    quote:
      "In order to write about life first you must live it.",
    author: "- Ernest Hemingway",
  },
];

let btn = document.querySelector("button");
let quote = document.getElementById("quotes")
let author = document.getElementById("author")


function randomQuotes (){
    let random = Math.floor(Math.random()* quotesArray.length)
    quote.textContent = quotesArray[random].quote
    author.textContent = quotesArray[random].author
}


btn.addEventListener("click", () => {randomQuotes()});

