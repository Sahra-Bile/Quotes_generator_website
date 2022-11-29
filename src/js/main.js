const quoteContainer = document.getElementById("quote-container");

const quoteText = document.getElementById("quote");

const authorText = document.getElementById("author");

const newQuoteBtn = document.getElementById("new-quoteBtn");

const twitterBtn = document.getElementById("twitter-button");

const loader = document.getElementById("loader");

let apiQuotes = [];

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

//! show new quotes
const getNewQuotes = () => {
  loading();
  //! pick  a random quote from apiQuotes array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //! check if author fieldis blank and replaceit with 'Unknown
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  //! check quotes length to determine stylnig
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote"); //! ta bort styling om text.length är mindre än 50
  }
  quoteText.textContent = quote.text;
  //! set quotes hide loader
  complete();
};

//! Get Quotes From API

//**  vi får Json från apiet som response och jag omvandlar responsen till json objekt för att web servern ger bara en massor strängar */

async function getQuotes() {
  loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl); //!await ger fetch tid att fetcha apien

    apiQuotes = await response.json();

    getNewQuotes(); //! function quotes generator
  } catch (erro) {
    //! catch error here
  }
}
//! twitter quotes
function twitterQuotes() {
  const twitterurl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterurl, "-blank"); //! öppna en blnak sida
}
//! event listerens
newQuoteBtn.addEventListener("click", getNewQuotes);
twitterBtn.addEventListener("click", twitterQuotes);

//! on load
getQuotes();
