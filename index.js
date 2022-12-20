// variables

let btn = document.querySelector('#new-quote');
let one = document.querySelector('.quote');
let two = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others,"`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal,not to people or things."`,
    person:`Albert Einstein`
}, {
    quote: `"At his best."`,
    person:`Aristotle`
}, {
    quote: `"your time is limited."`,
    person:`steve jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person:`Benjamin Franklin`
}, ];

btn.addEventListener('click', function(){
   // alert("fvfh")

    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    one.innerText = quotes[random].quote;
    two.innerText = quotes[random].person;
})