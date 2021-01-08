//Show todays date
let dateElement = document.getElementById("date"); //show date
let today = new Date();
options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.innerHTML = today.toLocaleDateString('en-US', options);

//*first thing first, call all id element
let playerVsPlayerBtn = document.getElementById('playerVsPlayerBtn');
let playerVsCPUBtn = document.getElementById('playerVsCPUBtn');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let oneRoundBtn = document.getElementById('oneRoundBtn');
let bestOf5Btn = document.getElementById('bestOf5Btn');
let bestOf7Btn = document.getElementById('bestOf7Btn');
//Cpu------------
let url = 'https://csa2020studentapi.azurewebsites.net/rpsls';
let computerChoice = ''; //whatever string response text return
let selectionChoices = '';
let roundOption = 0;


playerVsCPUBtn.addEventListener('click', function () {
    alert("Computer accept human challenge...");
    // console.log('Computer accept human challenge...');
    fetch(url).then(data => { //fetch the url, grap the response in text
        // console.log(data);
        data.text().then( //data.text will only grab the string
            function (value) {
                console.log(value); //will show the url value in console
                computerChoice = value; //cpu choice will equall to whatever value is fetch
            }
        )
    })
});
console.log(fetch("https://csa2020studentapi.azurewebsites.net/rpsls")); //show on console side what value is return

playerVsPlayerBtn.addEventListener('click', function () {
    alert('Lets have a good game!');
    // console.log('Lets have a good game!');
});
function playRound() {
    document.getElementById('roundOption').style.display = "flex";

    oneRoundBtn.addEventListener('click', function () {
        console.log('You no fun');
        roundOption = 1;
    });
    bestOf5Btn.addEventListener('click', function () {
        console.log('Who will get 3 first?');
        roundOption = 5;
    });
    bestOf7Btn.addEventListener('click', function () {
        console.log('You must be bored...Lets-a go!');
        roundOption = 7;
    });
}
function outCome() {
    document.getElementById('rock').addEventListener('click', function () {
        selectionChoices = "rock";
        computerGame(computerChoice, selectionChoices);
    })
    document.getElementById('paper').addEventListener('click', function () {
        selectionChoices = "paper";
        computerGame(computerChoice, selectionChoices);
    })
    document.getElementById('scissors').addEventListener('click', function () {
        selectionChoices = "scissors";
        computerGame(computerChoice, selectionChoices);
    })
    document.getElementById('lizard').addEventListener('click', function () {
        selectionChoices = "lizard";
        computerGame(computerChoice, selectionChoices);
    })
    document.getElementById('spock').addEventListener('click', function () {
        selectionChoices = "spock";
        computerGame(computerChoice, selectionChoices);
    })
}
console.log(outCome);
//create a function for variable computer game
function computerGame(computerChoice, selectionChoices) {
    if (computerChoice == selectionChoices) {
        console.log('Its a tie');
    }
    else if (selectionChoices == "rock") {
        if (computerChoice == "paper") {
            console.log('Computer Win');

        }
        else if (computerChoice == "scissors") {
            console.log('You win');
        }
        else if (computerChoice == "lizard") {
            console.log('You win');
        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
        }
    }
    else if (selectionChoices == "paper") {
        if (computerChoice == "rock") {
            console.log('You win');
        }

        else if (computerChoice == "scissors") {
            console.log('Computer Win');
        }
        else if (computerChoice == "lizard") {
            console.log('Computer Win');
        }
        else {
            console.log('You Win');
        }
    }
    else if(selectionChoices == "scissors"){
        if(computerChoice == "rock"){
            console.log('Computer Win');
        }
        else if(computerChoice == "paper"){
            console.log('You win');
        }
        else if(computerChoice == "lizard"){
            console.log('You Win');
        }
        else{
            console.log('Computer Win');
        }
    }
    else if(selectionChoices == "lizard"){
        if(computerChoice == "rock"){
            console.log('Computer Win');
        }
        else if(computerChoice == "paper"){
            console.log('You Win');
        }
        else if (computerChoice == "scissors"){
            console.log('Computer Win');
        }
        else{
            console.log('You Win');
        }
    }
    else if(selectionChoices == "spock"){
        if(computerChoice == "rock"){
            console.log('You Win');
        }
        else if(computerChoice == "paper"){
            console.log('Computer Win');
        }
        else if(computerChoice == "scissors"){
            console.log('You Win');
        }
    }
}
console.log(computerGame);

//create an event listener for each button to toggle between pages
document.getElementById('rules').addEventListener('click', function () {
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'flex';
    document.getElementById('rulesCont').style.display = "none";
});
document.getElementById('readyToPlay').addEventListener('click', function () {
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'none';
    document.getElementById('rulesCont').style.display = "none";
    document.getElementById('playerMode').style.display = "flex";
    document.getElementById('roundOption').style.display = "none";
});
document.getElementById('rulesPlayBtn').addEventListener('click', function () {
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'none';
    document.getElementById('rulesCont').style.display = "none";
    document.getElementById('playerMode').style.display = "flex";
    document.getElementById('roundOption').style.display = "none";
});
document.getElementById('playerVsCPUBtn').addEventListener('click', function () {
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'none';
    document.getElementById('rulesCont').style.display = "none";
    document.getElementById('playerMode').style.display = "none";
    document.getElementById('roundOption').style.display = "flex";
    // document.getElementById('scores').style.display = "none";
});
document.getElementById('oneRoundBtn').addEventListener('click', function () {
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'none';
    document.getElementById('rulesCont').style.display = "none";
    document.getElementById('playerMode').style.display = "none";
    document.getElementById('roundOption').style.display = "none";
    document.getElementById('userChoice').style.display = "flex";
    // document.getElementById('scores').style.display = "flex";
});



