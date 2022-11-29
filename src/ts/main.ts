import { Quotes } from './models/Quotes';
import axios from 'axios';

 const quoteContainer: HTMLDivElement = document.getElementById('quote-container"') as HTMLDivElement;

 const quoteText:HTMLSpanElement = document.getElementById('quote') as HTMLSpanElement;

 const authorText:HTMLSpanElement = document.getElementById('author') as HTMLSpanElement;

 const newQuoteBtn:HTMLButtonElement = document.getElementById('new-quoteBtn') as HTMLButtonElement;

 const twitterBtn:HTMLButtonElement = document.getElementById('twitter-button') as HTMLButtonElement;

 const loader:HTMLButtonElement = document.getElementById("loader") as HTMLButtonElement;


async function getQuotes() {
  const proxyUrl = 'htpps://cors-anywhere.herokuapp.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try{
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
   console.log(data);

  }catch(error){
    getQuotes();
    console.log("woops no quotes" , error);
  }
  
}
//! on load 
getQuotes();