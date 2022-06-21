function computerPlay(){
    const status = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return status[index];
}
function playRound(choice1, choice2){
    let player = choice1.toLowerCase();
    let computer = choice2.toLowerCase();
    if(player === computer){
        console.log(`Draw! ${computer} equals ${player}`);
        return 0;
    }
    else{
        if (player === 'rock' && computer === 'paper') {
             console.log(`You lose! ${computer} beats ${player}`);
             return -1;
        }
        if (player === 'rock' && computer === 'scissors') {
            console.log(`You win! ${player} beats ${computer}`);
            return 1;
        }
        if (player === 'paper' && computer === 'rock') {
            console.log(`You win! ${player} beats ${computer}`);
            return 1;
        }
        if (player === 'paper' && computer === 'scissors') {
            console.log(`You lose! ${computer} beats ${player}`);
            return -1;
        }
        if (player === 'scissors' && computer === 'paper') {
            console.log(`You win! ${player} beats ${computer}`);
            return 1;
        }
        if (player === 'scissors' && computer === 'rock') {
            console.log(`You lose! ${computer} beats ${player}`);
            return -1;
        }
    }
}
function game(){
    let count = 0;
    for(let i = 0; i < 5; i++){
        let player_choice = prompt('Input your choice as one of rock, paper, scissors:');
        let computer_choice = computerPlay();
        count += playRound(player_choice, computer_choice);
        if(count === 3){
            console.log('You Win!');
            return;
        }
        if(count === -3){
            console.log('You Lost!');
            return;
        }
    }
    if(count === 0){
        console.log('No Winner!');
    }
    else{
        if(count > 0){
            console.log('You Win!');
        }
        else{
            console.log('You Lost!');
        }
    }
    return;
}

function updatePoints(points, div, body){
    div.textContent = 'You have points: ' + points;
    if (points === 5) {
        div.textContent = 'You win!';
	div.setAttribute('style', 'color: green; font-size: 64px;')
	points = 0;
    }
    else {
        if (points === -5) {
            div.textContent = 'You lose';
	    div.setAttribute('style', 'color: red; font-size: 64px;')	
	    points = 0;
        }
    }
    body.appendChild(div);
    return points;
}

const body = document.querySelector('body');
body.setAttribute('style', 'background: white; display: flex; justify-content: center; align-items: center; flex-direction: column;');

const button1 = document.createElement('button');
button1.classList.add('rock');
button1.textContent = 'Rock';
button1.setAttribute('style', 'font-size: 32px; font-weight: bold; margin: 12px;')
body.appendChild(button1);

const button2 = document.createElement('button');
button2.classList.add('paper');
button2.textContent = 'Paper';
button2.setAttribute('style', 'font-size: 32px; font-weight: bold; margin: 12px;')
body.appendChild(button2);

const button3 = document.createElement('button');
button3.classList.add('scissors');
button3.textContent = 'Scissors';
button3.setAttribute('style', 'font-size: 32px; font-weight: bold; margin: 12px;')
body.appendChild(button3);

const div = document.createElement('div');
div.setAttribute('style', 'font-family: Arial, Helvetica, sans-serif; font-size: 32px;')

let points = 0;
const btn = document.querySelector('.rock');
btn.addEventListener('click', () => {
    points += playRound('rock', computerPlay());
    points = updatePoints(points, div, body);
});

const btn1 = document.querySelector('.paper');
btn1.addEventListener('click', () => {
    points += playRound('paper', computerPlay());
    points = updatePoints(points, div, body);
});

const btn2 = document.querySelector('.scissors');
btn2.addEventListener('click', () => {
    points += playRound('scissors', computerPlay());
    points = updatePoints(points, div, body);
});

