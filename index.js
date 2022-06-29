

fetch('https://free-quotes-api.herokuapp.com')
  .then(response => response.json())
  .then(data => {
    const quote = document.querySelector(".quote")
    const author = document.querySelector(".author")
    quote.textContent = `${data.quote}`
    data.author ? author.textContent = `- ${data.author}` : author.textContent = `- Anonymous`
  });


