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
    }
    else {
        if (points === -5) {
            div.textContent = 'You lose'
        }
    }
    body.appendChild(div);
}

const body = document.querySelector('body');

const button1 = document.createElement('button');
button1.classList.add('rock');
button1.textContent = 'Rock';
body.appendChild(button1);

const button2 = document.createElement('button');
button2.classList.add('paper');
button2.textContent = 'Paper';
body.appendChild(button2);

const button3 = document.createElement('button');
button3.classList.add('scissors');
button3.textContent = 'Scissors';
body.appendChild(button3);

const div = document.createElement('div');

let points = 0;
const btn = document.querySelector('.rock');
btn.addEventListener('click', () => {
    points += playRound('rock', computerPlay());
    updatePoints(points, div, body);
});

const btn1 = document.querySelector('.paper');
btn1.addEventListener('click', () => {
    points += playRound('paper', computerPlay());
    updatePoints(points, div, body);
});

const btn2 = document.querySelector('.scissors');
btn2.addEventListener('click', () => {
    points += playRound('scissors', computerPlay());
    updatePoints(points, div, body);
});

