var face = Math.floor(Math.random()*10) + 1;

function submit(){
    document.getElementById("imageDiv").innerHTML="";
    const userNum = Number(document.getElementById("number").value);

    if(userNum<1 || userNum>10){
        alert("Enter Number between 0 to 11");
        return;
    }
    
    if(userNum===face){
        document.getElementById("win").innerText = `Congratulation Your Win.`;
        const img = document.createElement("img");
        img.src = "birthdayimg.jpeg";

        document.getElementById("imageDiv").appendChild(img);
    }
    else if(userNum<face){
        document.getElementById("win").innerText = `You Lost guess greater number.`;
        const img = document.createElement("img");
        img.src = "sad.jpeg";

        document.getElementById("imageDiv").appendChild(img);
    }
    else{
        document.getElementById("win").innerText = `You Lost guess smaller number.`;
        const img = document.createElement("img");
        img.src = "sad.jpeg";

        document.getElementById("imageDiv").appendChild(img);
    }
    
}

function reset(){
    window.location.reload();
}