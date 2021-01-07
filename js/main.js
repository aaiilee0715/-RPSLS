//Show todays date
let dateElement = document.getElementById("date"); //show date
let today = new Date();
options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.innerHTML = today.toLocaleDateString('en-US', options);

//*first thing first, call all id element
let playerVsPlayerBtn = document.getElementById('playerVsPlayerBtn');
let playerVsCPUBtn = document.getElementById('playerVsCPUBtn');

let choiceRock = document.getElementById('choiceRock');
let choicePaper = document.getElementById('choicePaper');
let choiceScissors = document.getElementById('choiceScissors');
let choiceLizard = document.getElementById('choiceLizard');
let choiceSpock = document.getElementById('choiceSpock');

let oneRoundBtn = document.getElementById('oneRoundBtn');
let bestOf5Btn = document.getElementById('bestOf5Btn');
let bestOf7Btn = document.getElementById('bestOf7Btn');
let startGameBtn = document.getElementById('startGameBtn');

let roundOption = 0;
//create an event listener for each button
playerVsPlayerBtn.addEventListener('click', function(){
    console.log('Lets have a good game!');
});
playerVsCPUBtn.addEventListener('click', function(){
    console.log('Computer accept human challenge...');
});
oneRoundBtn.addEventListener('click', function(){
    console.log('You no fun');
    roundOption = 1;
});
bestOf5Btn.addEventListener('click', function(){
    console.log('Who will get 3 first?');
    roundOption = 5;
});
bestOf7Btn.addEventListener('click', function(){
    console.log('You must be bored...Lets-a go!');
    roundOption = 7;
});
startGameBtn.addEventListener('click', function(){
    console.log('May the odds be ever in your favor');
});
//restart the game
restartBtn.addEventListener('click', function(){
    location.reload();
});
