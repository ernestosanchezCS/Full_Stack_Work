var wins = 0;
var loss = 0;
var ties = 0;
var input;
var cpu;
var keepPlaying = true;
var result;


function getChoice() {

    //asks for user selection
    input = prompt("Choose R or P or S. \nPlease enter explicitly one of the capital letters");

    //ensuring acceptable input or re-prompt
    if ((input == "R") || (input == "P") || (input == "S")) {
        return;
    }
    else {
        getChoice();
    }
}

function getCpuChoice() {
    //gets random number 0-3 with random
    //floor makes it an even integer 
    //so we can use to index a selection we need whole numbers
    cpu = Math.floor(Math.random() * (2 + 1));

    //converts random number into R,P,S 
    if (cpu == 0) {
        cpu = "R";
    } else if (cpu == 1) {
        cpu = "P";
    }
    else if (cpu == 2) {
        cpu = "S"
    }
}

function getResult() {

    if (input == cpu) {
        ties += 1;
        result = "tie";
        let tieMessage = alert("You tied! CPU also chose " + cpu);

    } else if (input == "R" && cpu == "S" || input == "P" && cpu == "R" || input == "S" && cpu == "P") {
        wins += 1;
        result = "win";
        let winMessage = alert("You Won! CPU chose " + cpu);
    } else {
        loss += 1;
        result = "loss"
        let lossMessage = alert("You Lost! CPU chose " + cpu);
    }
    keepPlaying = confirm("Do you want to play again?\n Current Wins: " + wins + "\nCurrent Losses:  " + loss + "\nCurrent Ties: " + ties);

}

do {
    //resets for next iteration consistency
    input = "";
    cpu = NaN;

    //call function to get a accepted input choice from user
    console.log(input);
    getChoice();
    console.log(input);

    //we have user selection in choice now
    //we need to get cpu choice using random
    console.log(cpu);
    getCpuChoice();
    console.log(cpu);

    //compare input and get the result 
    console.log(result);
    getResult();
    console.log(result);


} while (keepPlaying);

var endMessage = alert("Thanks Bye!");






