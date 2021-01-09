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
let computerChoice; //Will store whatever string response text return
let selectionChoices;
// let userRound3Choice = '';
let numToWin = 0;
let userWin = 0;
let cpuWin = 0;
//pvp
playerVsPlayerBtn.addEventListener('click', function () {
    alert('Lets have a good game!');
});
//user vs cpu
playerVsCPUBtn.addEventListener('click', function () {
    alert("Computer accept human challenge...");
    fetch(url).then(data => { //fetch the url, grap the response in text
        // console.log(data);
        data.text().then( //data.text will only grab the string
            function (value) {
                // console.log(value); //will show the url value in console
                computerChoice = value; //cpu choice will equall to whatever value is fetch
                playRound();
            }
        )
    })
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'none';
    document.getElementById('rulesCont').style.display = "none";
    document.getElementById('playerMode').style.display = "flex";
    document.getElementById('roundOption').style.display = "flex";

});
function playRound() {
    document.getElementById('roundOption').style.display = "flex";
    //1 win------
    document.getElementById('oneRoundBtn').addEventListener('click', function () {
        alert('You no fun');
        document.getElementById('mainCont').style.display = 'none';
        document.getElementById('gameRulesPage').style.display = 'none';
        document.getElementById('rulesCont').style.display = "flex";
        document.getElementById('playerMode').style.display = "none";
        document.getElementById('roundOption').style.display = "none";
        document.getElementById('userChoice').style.display = "flex";
        document.getElementById('resultScore').style.display = 'none';
        compareRound(computerChoice, selectionChoices);
        computerChoice = computerChoice.toLowerCase();
        selectionChoices = selectionChoices.toLowerCase();
        compareRound();
    });
    // 3 out of 5
    bestOf5Btn.addEventListener('click', function () {
        alert('Who will get 3 first?');
        numToWin = 3;
        document.getElementById('mainCont').style.display = 'none';
        document.getElementById('gameRulesPage').style.display = 'none';
        document.getElementById('rulesCont').style.display = "flex";
        document.getElementById('playerMode').style.display = "none";
        document.getElementById('roundOption').style.display = "none";
        document.getElementById('best5Choice').style.display = "flex";
        document.getElementById('resultScore').style.display = 'none';
        compareRound(computerChoice, userRound3Choice);
        //Get the choices, normalising to lower case    
        computerChoice = computerChoice.toLowerCase();
        userRound3Choice = userRound3Choice.toLowerCase();
        pvC3Round();
    });
    //4 out of 7
    bestOf7Btn.addEventListener('click', function () {
        alert('You must be bored...Lets-a go!');
        numToWin = 4;
        document.getElementById('mainCont').style.display = 'none';
        document.getElementById('gameRulesPage').style.display = 'none';
        document.getElementById('rulesCont').style.display = "flex";
        document.getElementById('playerMode').style.display = "none";
        document.getElementById('roundOption').style.display = "none";
        document.getElementById('best4Choice').style.display = "flex";
        document.getElementById('resultScore').style.display = 'none';
        compareRound(computerChoice, selectionChoices);
        computerChoice = computerChoice.toLowerCase();
        selectionChoices = selectionChoices.toLowerCase();
        pvC4Round();
    });
}
document.getElementById('rock').addEventListener('click', function () {
    selectionChoices = "rock";
    compareRound(computerChoice, selectionChoices);
})
document.getElementById('paper').addEventListener('click', function () {
    selectionChoices = "paper";
    compareRound(computerChoice, selectionChoices);
})
document.getElementById('scissors').addEventListener('click', function () {
    selectionChoices = "scissors";
    compareRound(computerChoice, selectionChoices);
})
document.getElementById('lizard').addEventListener('click', function () {
    selectionChoices = "lizard";
    compareRound(computerChoice, selectionChoices);
})
document.getElementById('spock').addEventListener('click', function () {
    selectionChoices = "spock";
    compareRound(computerChoice, selectionChoices);
})
//create an event listener for each button to toggle between pages
document.getElementById('rules').addEventListener('click', function () {
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'flex';
    document.getElementById('rulesCont').style.display = "none";
    document.getElementById('best5Choice').style.display = "none";
    document.getElementById('best4Choice').style.display = "none";
    document.getElementById('resultScore').style.display = 'none';
    document.getElementById('scoreCounter').style.display = 'none';
});
document.getElementById('readyToPlay').addEventListener('click', function () {
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'none';
    document.getElementById('rulesCont').style.display = "none";
    document.getElementById('playerMode').style.display = "flex";
    document.getElementById('roundOption').style.display = "none";
    document.getElementById('resultScore').style.display = 'none';
});
document.getElementById('rulesPlayBtn').addEventListener('click', function () {
    document.getElementById('mainCont').style.display = 'none';
    document.getElementById('gameRulesPage').style.display = 'none';
    document.getElementById('rulesCont').style.display = "none";
    document.getElementById('playerMode').style.display = "flex";
    document.getElementById('roundOption').style.display = "none";
    document.getElementById('resultScore').style.display = 'none';
});
let userScore = 0;
let cpuScore = 0;
let results = document.getElementById('results');
function compareRound(computerChoice, selectionChoices) {
    if (computerChoice == selectionChoices) {
        document.getElementById('userChoice').style.display = 'none';
        document.getElementById('resultScore').style.display = 'flex';
        document.getElementById('results').style.display = 'flex';
        document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
        document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
        document.getElementById('scoreCounter').style.display = 'flex';
        results.innerText = 'draw';
    }
    else if (selectionChoices == "rock") {
        if (computerChoice == "paper") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'Computer Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "scissors") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'You Win';
            userScore++;
            document.getElementById('userScore').innerText = userScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "lizard") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'Computer Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            document.getElementById('cpuScore').innerText = cpuScore;
        }
    }
    else if (selectionChoices == "paper") {
        if (computerChoice == "rock") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'You Win';
            userScore++;
            document.getElementById('userScore').innerText = userScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "scissors") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'Computer Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "lizard") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'Computer Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
        }
    }
    else if (selectionChoices == "scissors") {
        if (computerChoice == "rock") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'Computer Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "paper") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'You Win';
            userScore++;
            document.getElementById('userScore').innerText = userScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "lizard") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'You Win';
            userScore++;
            document.getElementById('userScore').innerText = userScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
        }
    }
    else if (selectionChoices == "lizard") {
        if (computerChoice == "rock") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'You Win';
            userScore++;
            document.getElementById('userScore').innerText = userScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "paper") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'You Win';
            userScore++;
            document.getElementById('userScore').innerText = userScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "scissors") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'Computer Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
        }
    }
    else if (selectionChoices == "spock") {
        if (computerChoice == "rock") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'Computer Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "paper") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'Computer Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
        else if (computerChoice == "scissors") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = 'You Selected: ' + selectionChoices;
            document.getElementById('computerChoice').innerText = 'CPU Selected: ' + computerChoice;
            results.innerText = 'You Win';
            cpuScore++;
            document.getElementById('cpuScore').innerText = cpuScore;
            document.getElementById('scoreCounter').style.display = 'flex';
        }
    }
}
//3 round function
// document.getElementById('choice1').addEventListener('click', function () {
//     userRound3Choice = "rock";
//     cpu3RoundGame(computerChoice, userRound3Choice);
// })
// document.getElementById('choice2').addEventListener('click', function () {
//     userRound3Choice = "paper";
//     cpu3RoundGame(computerChoice, userRound3Choice);
// })
// document.getElementById('choice3').addEventListener('click', function () {
//     userRound3Choice = "scissors";
//     cpu3RoundGame(computerChoice, userRound3Choice);
// })
// document.getElementById('choice4').addEventListener('click', function () {
//     userRound3Choice = "lizard";
//     cpu3RoundGame(computerChoice, userRound3Choice);
// })
// document.getElementById('choice5').addEventListener('click', function () {
//     userRound3Choice = "spock";
//     cpu3RoundGame(computerChoice, userRound3Choice);
// })
//create a anothay function for 3 round
// function pvC3Round() {
//     console.log('you are in 3 round game'); //this is working
//     if (numToWin == 3) {
//         for (let i = 0; i < numToWin; i++) {
//             fetch(url).then(data => { 
              
//                 data.text().then( 
//                     function (value) {
//                         console.log(value);
//                         computerChoice = value; 
//                     }
//                 )
//             })
//         }
//     }
// }

// function cpu3RoundGame(computerChoice, userRound3Choice) {

// }


