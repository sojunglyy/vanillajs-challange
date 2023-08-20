const quotes = [
    {quote: "A", author: "A-1"},
    {quote: "B", author: "B-1"},
    {quote: "C", author: "C-1"},
    {quote: "D", author: "D-1"},
    {quote: "E", author: "E-1"},
    {quote: "F", author: "F-1"},
    {quote: "G", author: "G-1"},
    {quote: "H", author: "H-1"},
    {quote: "I", author: "I-1"},
    {quote: "J", author: "J-1"}, 
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;