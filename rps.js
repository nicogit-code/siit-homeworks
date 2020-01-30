
function play() {
    const arr = ["rock", "paper", "scissors"];

    const randomComp = Math.floor(Math.random() * arr.length);
        console.log('Computer choice: ' + randomComp);
        
    const randomUser = Math.floor(Math.random() * arr.length);
        console.log('User choice: ' + randomUser);

    if(randomUser === randomComp) {
        console.log("It`s a tie");
        } else if((randomUser == "rock" && randomComp == "paper") || (randomUser == "paper" && randomComp == "scissors") 
                  || (randomUser == "scissors" && randomComp == "rock" )) {
            console.log("Computer wins");   
        } else {
            console.log("User wins"); 
        }
    }
    play();