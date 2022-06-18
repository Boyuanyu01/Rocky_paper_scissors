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
game();
