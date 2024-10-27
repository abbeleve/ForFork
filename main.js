let step = '';
let gameWho = document.getElementById('gameWho');
let winner = '';



const who = () => {
    if (step == "player1cross"){
        step = "player2circle";
        gameWho.innerText = "Игрок 2 Нолики";
    } else {
        step = "player1cross";
        gameWho.innerText = "Игрок 1 Крестики";
    }
}

who();

let gameItem = document.querySelectorAll('.gameItem');
let counter = 0;

gameItem.forEach((item) => {
    item.addEventListener("click", () => {
        if ( !item.classList.contains("player1cross") &&
             !item.classList.contains("player2circle")){
                item.classList.add(step);
                if (step == "player1cross"){
                    item.innerText = "X";
                }
                if (step == "player2circle"){
                    item.innerText = "0";
                }
                counter++;
                who();
                crossWin();
                circleWin();
                noWin();
             }
    })
})


// массив выйгрышных комбинаций 
let win = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [3,4,5]
];
// написать функции проверки
let crossWin = () => {
    for(let i = 0; i < win.length; i++){
        if (gameItem[win[i][0]].classList.contains("player1cross") &&
            gameItem[win[i][1]].classList.contains("player1cross") &&
            gameItem[win[i][2]].classList.contains("player1cross")){
                gameItem[win[i][0]].classList.add("winColor");
                gameItem[win[i][1]].classList.add("winColor");
                gameItem[win[i][2]].classList.add("winColor");
                winner = "Игрок 1 Крестики";
                endGame(winner);
                return 1;
            }
    }
}

let circleWin = () => {
    for(let i = 0; i < win.length; i++){
        if (gameItem[win[i][0]].classList.contains("player2circle") &&
            gameItem[win[i][1]].classList.contains("player2circle") &&
            gameItem[win[i][2]].classList.contains("player2circle")){
                gameItem[win[i][0]].classList.add("winColor");
                gameItem[win[i][1]].classList.add("winColor");
                gameItem[win[i][2]].classList.add("winColor");
                winner = "Игрок 2 Нолики";
                endGame(winner);
                return 1;
            }
    }
}

let noWin = () => {
    if (!circleWin() && !crossWin && counter >= 9){
        winner = "Ничья";
        endGame(winner);
    }
}

// присвоить значения элементам страницы
let gameArea = document.getElementById("gameArea");
let gameWinner = document.getElementById("Winner");
let spanWin= document.getElementById("spanWin");
let btnNewGame = document.getElementById("btnNewGame");

// функция завершения игра
let endGame = (winner) => {
    gameArea.style.pointerEvents = "none";
    gameWinner.style.display = "flex";
    spanWin.innerText = winner;
}

btnNewGame.addEventListener('click', () => {
    document.location.reload();
})