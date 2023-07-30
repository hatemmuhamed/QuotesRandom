var quotes= [
    {
        quote:" “I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
        author: "― Marilyn Monroe"
    },
    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"― Bernard M. Baruch"
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
    {
        quote:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain"
    },
    {
        quote:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard"
    },
    {
        quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"― Oscar Wilde"
    },
    {
        quote:"“Without music, life would be a mistake.”",
        author:"― Friedrich Nietzsche"
    },
    {
        quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
        author:"― Andre Gide, Autumn Leaves"
    },
    {
        quote:"“We accept the love we think we deserve.”",
        author:"― Stephen Chbosky"
    },
    {
        quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author:"― Mahatma Gandhi"
    }
]

function showQuote(){
    var randomNum= Math.floor(Math.random()*quotes.length);
    console.log(randomNum);
    document.getElementById('quote').innerHTML=quotes[randomNum].quote;
    document.getElementById('author').innerHTML=quotes[randomNum].author;
}