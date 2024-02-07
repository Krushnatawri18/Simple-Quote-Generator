var quotes = [
    "Life is what happens when you're busy making other plans. ",
    "The journey of a thousand miles begins with one step. ",
    "Fall seven times, stand up eight. ",
    "Believe you can and you're halfway there. ",
    "In the middle of difficulty lies opportunity. ",
    "Be the change that you wish to see in the world. ",
    "The only thing we have to fear is fear itself. ",
    "No act of kindness, no matter how small, is ever wasted. ",
    "You miss 100% of the shots you don't take. ",
    "Be yourself; everyone else is already taken. ",
    "You are never too old to set another goal or to dream a new dream. ",
    "Do what you can, with what you have, where you are. ",
    "The only way to do great work is to love what you do. ",
    "Success is not the key to happiness. Happiness is the key to success. ",
    "Attitude is a little thing that makes a big difference. ",
    "The best preparation for tomorrow is doing your best today. ",
    "The only limit to our realization of tomorrow will be our doubts of today. ",
    "You don't have to be great to start, but you have to start to be great. ",
    "It does not matter how slowly you go as long as you do not stop. ",
]

function newQuote() {
    var random_number = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[random_number];
}

function success() {
    document.getElementById("quoteDisplay").innerHTML = "Successfully changed the quote";
}

