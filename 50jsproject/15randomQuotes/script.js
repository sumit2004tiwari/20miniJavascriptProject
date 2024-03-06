const quotesContainer =   document.getElementById("quotes1");
const author=   document.getElementById("author");
const btn=   document.getElementById("btn");

  async function getQuotes() {
    const response = await fetch(`https://api.quotable.io/quotes/random`);
    const data =  await response.json();
    console.log(data[0].content);
   // console.log(quotes.value);
    // console.log(data[0].content);

    console.log(quotesContainer)
    quotesContainer.innerHTML = data[0].content;
    author.textContent = data[0].author;
  }

  btn.addEventListener('click' , getQuotes);
