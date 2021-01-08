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
let computerChoice; //whatever string response text return
let selectionChoices;
let roundOption = 0;

playerVsPlayerBtn.addEventListener('click', function () {
    alert('Lets have a good game!');
    // console.log('Lets have a good game!');
});
playerVsCPUBtn.addEventListener('click', function () {
    alert("Computer accept human challenge...");
    // console.log('Computer accept human challenge...');
    fetch(url).then(data => { //fetch the url, grap the response in text
        // console.log(data);
        data.text().then( //data.text will only grab the string
            function (value) {
                console.log(value); //will show the url value in console
                computerChoice = value; //cpu choice will equall to whatever value is fetch
                playRound();
            }
        )
    })
});

function playRound() {
    document.getElementById('roundOption').style.display = "flex";

    oneRoundBtn.addEventListener('click', function () {
        alert('You no fun');
        roundOption = 1;
    });
    bestOf5Btn.addEventListener('click', function () {
        alert('Who will get 3 first?');
        roundOption = 5;
    });
    bestOf7Btn.addEventListener('click', function () {
        alert('You must be bored...Lets-a go!');
        roundOption = 7;
    });
}


console.log(fetch("https://csa2020studentapi.azurewebsites.net/rpsls")); //show on console side what value is return


// function outCome() {
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
// }
// console.log(outCome);
//create a function for variable computer game
function compareRound(computerChoice, selectionChoices) {
    console.log("Get Winner: player", selectionChoices, "computer", computerChoice);
    if (computerChoice == selectionChoices) {
        document.getElementById('userChoice').style.display = 'none';
        document.getElementById('resultScore').style.display = 'flex';
        document.getElementById('playerChoice').innerText = selectionChoices;
        document.getElementById('computerChoice').innerText = computerChoice;
        document.getElementById('draw').innerText = 'draw';
        return (computerChoice, selectionChoices);
    }
    else if (selectionChoices == "rock") {
        if (computerChoice == "paper") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;
            

        }
        else if (computerChoice == "scissors") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;
            
        }
        else if (computerChoice == "lizard") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
    }
    else if (selectionChoices == "paper") {
        if (computerChoice == "rock") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }

        else if (computerChoice == "scissors") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else if (computerChoice == "lizard") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
    }
    else if (selectionChoices == "scissors") {
        if (computerChoice == "rock") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else if (computerChoice == "paper") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else if (computerChoice == "lizard") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
    }
    else if (selectionChoices == "lizard") {
        if (computerChoice == "rock") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else if (computerChoice == "paper") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else if (computerChoice == "scissors") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
    }
    else if (selectionChoices == "spock") {
        if (computerChoice == "rock") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else if (computerChoice == "paper") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
        else if (computerChoice == "scissors") {
            document.getElementById('resultScore').style.display = 'flex';
            document.getElementById('userChoice').style.display = 'none';
            document.getElementById('playerChoice').innerText = selectionChoices;
            document.getElementById('computerChoice').innerText = computerChoice;

        }
    }


}
// console.log(compareRound);

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



