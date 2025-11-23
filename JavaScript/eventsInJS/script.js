function On(){
    document.getElementById("bulb").style.backgroundColor="yellow";
}
function Off(){
    document.getElementById("bulb").style.backgroundColor="white";
}
function Red(){
    document.getElementById("bulb").style.backgroundColor="red";
}
function Blue(){
    document.getElementById("bulb").style.backgroundColor="blue";
}
function Green(){
    document.getElementById("bulb").style.backgroundColor="lightgreen";
}

const userColor = document.getElementById("color");

userColor.addEventListener("change", ()=>changeBulbColor(userColor.value));

function changeBulbColor(color){
    document.getElementById("bulb").style.backgroundColor=color;
}

function sb_control(){
    const btn = document.getElementById("sbButton");
    if(btn.innerText==="On"){
        document.getElementById("sbButton").innerText="Off";
        document.getElementById("smartBulb").classList.add("on");
    }
    else{
        document.getElementById("sbButton").innerText="On";
        document.getElementById("smartBulb").classList.remove("on");
    }
}

function sb_control2(){
    document.getElementById("smartBulb").classList.toggle("on");
}