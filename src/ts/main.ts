import { Quotes } from './models/Quotes';

 const quoteContainer: HTMLDivElement = document.getElementById('quote-container"') as HTMLDivElement;

 const quoteText:HTMLSpanElement = document.getElementById('quote') as HTMLSpanElement;

 const authorText:HTMLSpanElement = document.getElementById('author') as HTMLSpanElement;

 const newQuoteBtn:HTMLButtonElement = document.getElementById('new-quoteBtn') as HTMLButtonElement;

 const twitterBtn:HTMLButtonElement = document.getElementById('twitter-button') as HTMLButtonElement;



let apiQuotes: string[] = []

 const getNewQuotes = () =>{

  //! pick  a random quote from apiQuotes array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)] 
  console.log(quote);
 }

//! Get Quotes From API

//**  vi får Json från apiet som response och jag omvandlar responsen till json objekt för att web servern ger bara en massor strängar */

async function getQuotes<Quotes>() {

  const apiUrl:string = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try{
    const response = await fetch(apiUrl); //!await ger fetch tid att fetcha apien 

    apiQuotes = await response.json();
    // quoteText.textContent =   

    getNewQuotes();//! function quotes generator

  }catch(erro){
    //! catch error here
  }
}

//! on load 
getQuotes();
