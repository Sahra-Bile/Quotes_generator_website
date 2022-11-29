import { Quotes } from './models/Quotes';
import axios from 'axios';

 const quoteContainer: HTMLDivElement = document.getElementById('quote-container"') as HTMLDivElement;

 const quoteText:HTMLSpanElement = document.getElementById('quote') as HTMLSpanElement;

 const authorText:HTMLSpanElement = document.getElementById('author') as HTMLSpanElement;

 const newQuoteBtn:HTMLButtonElement = document.getElementById('new-quoteBtn') as HTMLButtonElement;

 const twitterBtn:HTMLButtonElement = document.getElementById('twitter-button') as HTMLButtonElement;

 const loader:HTMLButtonElement = document.getElementById("loader") as HTMLButtonElement;



let apiQuotes: Quotes[] = []

//! show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
//! hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}


  function getNewQuotes(){
    loading();

     //! pick  a random quote from apiQuotes array
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)] 


   //! check if author fieldis blank and replaceit with 'Unknown
  
   if (!quotes.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quotes.author;
  }

  //! check quotes length to determine stylnig

  if (quotes.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote"); //! ta bort styling om text.length är mindre än 120
  }
  quoteText.textContent = quotes.text;

  //! set quotes hide loader

  complete();
 }

//! Get Quotes From API

//**  vi får Json från apiet som response och jag omvandlar responsen till json objekt för att web servern ger bara en massor strängar */

function getQuotes():void{
  loading();
const apiUrl:string = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

 axios.get<Quotes>(apiUrl).then((response) =>{
  response.data;
  getNewQuotes();//! function quotes generator
 });
}

//! twitter quotes
function twitterQuotes() {
  const twitterurl:string = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterurl, "-blank"); //! öppna en blnak sida
}
//! event listerens
newQuoteBtn.addEventListener("click", getNewQuotes);
twitterBtn.addEventListener("click", twitterQuotes);


//! on load 
getQuotes();
