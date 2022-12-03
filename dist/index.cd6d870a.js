const quoteContainer = document.getElementById('quote-container"');
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quoteBtn");
const twitterBtn = document.getElementById("twitter-button");
let apiQuotes = [];
const getNewQuotes = ()=>{
    //! pick  a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
// authorText.textContent = quote.author;
// quoteText.textContent = quote.text;
};
//! Get Quotes From API
//**  vi får Json från apiet som response och jag omvandlar responsen till json objekt för att web servern ger bara en massor strängar */
async function getQuotes() {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl); //!await ger fetch tid att fetcha apien 
        apiQuotes = await response.json();
        getNewQuotes(); //! function quotes generator
    } catch (erro) {
    //! catch error here
    }
}
//! on load 
getQuotes();

//# sourceMappingURL=index.cd6d870a.js.map
