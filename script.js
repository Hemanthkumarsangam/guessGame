function startGame(){
    document.getElementById("gameArea").style.display = "block";
}
let low = parseInt(0);
let high = parseInt(101);
function displayGame(low, high){
    document.getElementById('displayContent').style.display = "block";
    document.getElementById('number').textContent = Math.floor((low+high)/2);
}

function smaller(){
    low = Math.floor((low+high)/2);
    displayGame(low, high);
}

function larger(){
    high = Math.floor((low+high)/2);
    displayGame(low, high);
}

function same(){
    alert('HURRAYYY..!!!!\n You won the game');
    document.getElementById('restart').style.display='block';
}
