//box
const bg = document.getElementById("bgColor");

bg.addEventListener("change", ()=>changeBoxColor(bg.value));

function changeBoxColor(color){
    document.getElementById("firstBox").style.backgroundColor=color;
}


// head
const head = document.getElementById("headColor");

head.addEventListener("change", ()=>changeHeadColor(head.value));

function changeHeadColor(color){
    document.getElementById("head").style.color=color;
}



//para
const para = document.getElementById("paraColor");

para.addEventListener("change", ()=>changeParaColor(para.value));

function changeParaColor(color){
    document.getElementById("para").style.color=color;
}