function start(){
    console.log("Game Started");

    document.getElementById("dice1").disabled = false;
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;
}
function restart(){
    window.location.reload();
}

function p1Play(){
    console.log("Player 1 Playing");
    let score = Number(document.getElementById("p1sc").innerText);

    const face = Math.floor(Math.random()*6) + 1;

    switch(face){
        case 1:{
            document.getElementById("p1dice").src = "./diceIMG/1.png";
            break;
        }
        case 2:{
            document.getElementById("p1dice").src = "./diceIMG/2.png";
            break;
        }
        case 3:{
            document.getElementById("p1dice").src = "./diceIMG/3.png";
            break;
        }
        case 4:
            document.getElementById("p1dice").src = "./diceIMG/4.png";
            break;
        case 5:
            document.getElementById("p1dice").src = "./diceIMG/5.png";
            break;
        case 6:
            document.getElementById("p1dice").src = "./diceIMG/6.png";
            break;
        default:
            document.getElementById("p1dice").src = "./diceIMG/6.png";
            break;
    }
    
    if(face===6){
        document.getElementById("dice1").disabled = true;
        document.getElementById("dice2").disabled = false;
    }
    else{
        score = score + face;
        document.getElementById("p1sc").innerText = score;
    }

}
function p2Play(){
    console.log("Player 2 Playing");

    let score = Number(document.getElementById("p2sc").innerText);

    const face = Math.floor(Math.random()*6) + 1;

    //shortcut for switch case
    document.getElementById("p2dice").src = `./diceIMG/${face}.png`;  // ./image/${face}.png
    
    if(face===6){
        document.getElementById("dice2").disabled = true;
        document.getElementById("dice1").disabled = false;
    }
    else{
        score = score + face;
        document.getElementById("p2sc").innerText = score;
    }
}