document.querySelector("button").addEventListener("click", function () {
    var diceImg = ["images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png",];
    var player1 = Math.floor(Math.random()*6);
    var player2 = Math.floor(Math.random()*6);
    console.log(player1 + " " + player2);

    document.querySelector(".dice-1").setAttribute("src", diceImg[player1]);
    document.querySelector(".dice-2").setAttribute("src", diceImg[player2]);

    if (player1 === player2){
        document.querySelector("h1").textContent = "Draw"
    } else if(player1 < player2){
        document.querySelector("h1").textContent = "Player 2 Wins!"
    }else{
        document.querySelector("h1").textContent = "Player 1 Wins!"
    }

});


