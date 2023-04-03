var quotes = [
    "Code is like humor. When you have to explain it, it is bad. - Cory House",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Clean code always looks like it was written by someone who cares. - Robert C. Martin",
    "Make it work, make it right, make it fast. - Kent Beck",
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "Computers are fast; developers keep them slow. - Anonymous",
    "There is always one more bug to fix. - Ellen Ullman"
]

function newQuote() {
    var random_number = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[random_number];
}

function success() {
    document.getElementById("quoteDisplay").innerHTML = "Successfully changed the quote";
}

function message() {
    document.getElementById("quoteDisplay").innerHTML = "Generate a quote";
}
