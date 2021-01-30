const boxes = document.querySelectorAll(".cell");
const playerO = "O";
const playerX = "X";
let currPlayer = playerX, winningPlayer = false, count = 0;
let playerName = document.querySelector("h1");
const cellId = [null, null, null, null, null, null, null, null, null];

const clicked = (event) => {
    if(!winningPlayer){
        const id = event.target.id;
        if(!cellId[id-1]){
            count++;
            cellId[id-1] = currPlayer;
            event.target.innerText = currPlayer;
            winningPlayer = playerWins();
            if(winningPlayer){
                currPlayer === playerX ? alert("Congratulations! Player1 wins") : alert("Congratulations! Player2 wins");
                playerName.innerText = playerX ? alert("Congratulations! Player1 wins") : alert("Congratulations! Player2 wins");
            }
            if(!winningPlayer){
            playerName.innerText = currPlayer === playerX ? "Player2" : "Player1";
            currPlayer = currPlayer === playerX ? playerO : playerX;
            }
            if(count == 9 && !winningPlayer){
                    alert("Draw!"); winningPlayer = true;
                    playerName.innerText = "Game Draw!";                
                }
        }
    }
}
boxes.forEach(box => {
    box.addEventListener("click", clicked);
})
function playerWins() {
    if(cellId[0] === currPlayer){
        if(cellId[1] === currPlayer && cellId[2] === currPlayer){
            return true;
        }
        if(cellId[3] === currPlayer && cellId[6] === currPlayer){
            return true;
        }
        if(cellId[4] === currPlayer && cellId[8] === currPlayer){
            return true;
        }
    }else if(cellId[8] === currPlayer){
        if(cellId[5] === currPlayer && cellId[2] === currPlayer){
            return true;
        }
        if(cellId[7] === currPlayer && cellId[6] === currPlayer){
            return true;
        }
    }
    if(cellId[4] === currPlayer){
        if(cellId[1] === currPlayer && cellId[7] === currPlayer){
            return true;
        }
        if(cellId[3] === currPlayer && cellId[5] === currPlayer){
            return true;
        }
        if(cellId[2] === currPlayer && cellId[6] === currPlayer){
            return true;
        }
    }
}
function reset() {
    for(var i=0; i<9; i++){
        cellId[i] = null;
    }
    currPlayer = playerX, winningPlayer = false, count = 0;
    boxes.forEach(box => {
    box.innerText = "";
    })
    playerName.innerText = "Player1";
}
