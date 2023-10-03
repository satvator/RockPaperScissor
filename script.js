// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// function getComputerChoice() {
//     choice=getRandomInt(3);
//     switch (choice){
//         case 0:
//             return "Rock";
//         case 1:
//             return "Paper";
//         case 2:
//             return "Scissor";
//     }
// }

// function playRound(playerSelection, computerSelection){
//     if (playerSelection=="rock"){
//         if (computerSelection=="Rock"){
//             alert("It's a Tie!")
//             // return "tie" 
//         }
//         else if (computerSelection=="Scissor"){
//             alert("You Win! Rock beats Scissor") 
//             return true
//         }
//         else if (computerSelection=="Paper"){
//             alert("You lose! Paper beats Rock") 
//             return false
//         }
//     }
//     else if (playerSelection=="scissor"){
//         if (computerSelection=="Scissor"){
//             alert("It's a Tie!")
//             // return "tie" 
//         }
//         else if (computerSelection=="Paper"){
//             alert("You Win! Scissor beats Paper") 
//             return true
//         }
//         else if (computerSelection=="Rock"){
//             alert("You lose! Rock beats Scissor") 
//             return false
//         }
//     }
//     else if (playerSelection=="paper"){
//         if (computerSelection=="Paper"){
//             alert("It's a Tie!") 
//             // return "tie"
//         }
//         else if (computerSelection=="Rock"){
//             alert("You Win! Paper beats Rock") 
//             return true
//         }
//         else if (computerSelection=="Scissor"){
//             alert("You lose! Scissor beats Paper") 
//             return false
//         }
//     }
//     else{alert('Wrong input!!')}
//     return 'tie'
// }


// function game(){
//     let i=0
//     let pflag=0
//     let cflag=0
//     while (i<5){
//         player=prompt("Choose b/w Rock, Paper & Scissor: ").toLowerCase()
//         computer=getComputerChoice()
//         console.log(player)
//         console.log(computer)
//         result=playRound(player,computer);
//         console.log(result)
//         result;
//         i++;
//         if (result!="tie"){
//             result ? pflag++ : cflag++;
//         }
//     console.log(pflag)
//     console.log(cflag)
//     }
//     if (pflag==cflag){
//         alert("Bummer! It's a tie")
//     }
//     else{alert(`You ${ (pflag>cflag) ? "win":"lose"} the game`)
//     }

//     if (prompt('Want to play again? (type yes or no)').toLowerCase()=='yes'){
//         game()
//     }else{alert('It was nice playing with you.')}
// }



const para=document.createElement('p')
para.setAttribute('id','atr')
para.style.color='red'
para.textContent="Hey I'm red!"

const h=document.createElement('h3')
h.setAttribute('style','color:blue; background:white;')
h.textContent="I'm a blue h3"

const content=document.createElement('div')

const container=document.querySelector('body #container')
container.appendChild(content)

const a=document.createElement('h1')
const b=document.createElement('p')
content.appendChild(a)
content.appendChild(b)
content.style.cssText=" backgroundColor:pink; border:solid black"
a.textContent="I'm in a div"
b.textContent="ME TOO!"

console.log(document)
console.dir(Document)


container.insertBefore(para, content)
container.insertBefore(h, content)

const btn=document.createElement('button')
container.appendChild(btn)
btn.textContent='submit'
// btn.onclick='content.style.FontWeight:bold'

btn.addEventListener('keydown', function (e) {
    // content.childNodes.style.background = 'blue';
    console.log(e.type)
});

console.log(content)

const id1=document.createElement('button')
const id2=document.createElement('button')
const id3=document.createElement('button')

contents=document.createElement('div')
content.appendChild(contents)
contents.setAttribute('id','container')
contents.appendChild(id2)
contents.appendChild(id1)
contents.appendChild(id3)
id1.setAttribute('id','1')
id2.setAttribute('id','2')
id3.setAttribute('id','3')

contents.insertBefore(id1, id2)

const buttons=document.querySelectorAll('button #container')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id)
    })
})
    if (prompt('Want to play again? (type yes or no)').toLowerCase()=='yes'){
        game()
    }else{alert('It was nice playing with you.')}
}


