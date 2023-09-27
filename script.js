function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    choice=getRandomInt(3);
    switch (choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection=="rock"){
        if (computerSelection=="Rock"){
            alert("It's a Tie!")
            // return "tie" 
        }
        else if (computerSelection=="Scissor"){
            alert("You Win! Rock beats Scissor") 
            return true
        }
        else if (computerSelection=="Paper"){
            alert("You lose! Paper beats Rock") 
            return false
        }
    }
    else if (playerSelection=="scissor"){
        if (computerSelection=="Scissor"){
            alert("It's a Tie!")
            // return "tie" 
        }
        else if (computerSelection=="Paper"){
            alert("You Win! Scissor beats Paper") 
            return true
        }
        else if (computerSelection=="Rock"){
            alert("You lose! Rock beats Scissor") 
            return false
        }
    }
    else if (playerSelection=="paper"){
        if (computerSelection=="Paper"){
            alert("It's a Tie!") 
            // return "tie"
        }
        else if (computerSelection=="Rock"){
            alert("You Win! Paper beats Rock") 
            return true
        }
        else if (computerSelection=="Scissor"){
            alert("You lose! Scissor beats Paper") 
            return false
        }
    }
    else{alert('Wrong input!!')}
    return 'tie'
}


function game(){
    let i=0
    let pflag=0
    let cflag=0
    while (i<5){
        player=prompt("Choose b/w Rock, Paper & Scissor: ").toLowerCase()
        computer=getComputerChoice()
        console.log(player)
        console.log(computer)
        result=playRound(player,computer);
        console.log(result)
        result;
        i++;
        if (result!="tie"){
            result ? pflag++ : cflag++;
        }
    console.log(pflag)
    console.log(cflag)
    }
    if (pflag==cflag){
        alert("Bummer! It's a tie")
    }
    else{alert(`You ${ (pflag>cflag) ? "win":"lose"} the game`)
    }

    if (prompt('Want to play again? (type yes or no)').toLowerCase()=='yes'){
        game()
    }else{alert('It was nice playing with you.')}
}