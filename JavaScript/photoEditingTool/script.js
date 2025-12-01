let b = 1, c=1, g=0,s=0, i=0, bl=0, rot=0, w=0;

const img = document.getElementById("image");
console.log(img.src);

if(img==="http://127.0.0.1:5500/JavaScript/photoEditingTool/index.html"){
    document.getElementById("image").style.display="none";
}
else{
    document.getElementById(uploadLabel).style.display="none";
}

function uploadImage(){
    const file = document.getElementById("Upload").files[0];

    const fileURL = URL.createObjectURL(file);
    
    document.getElementById("image").src=fileURL;
    document.getElementById("image").style.display="block";
    document.getElementById("uploadLabel").style.display="none";
    
}

function applyFilter(){
    document.getElementById("image").style.filter = `
        brightness(${b}) 
        contrast(${c})
        grayscale(${g}%)
        blur(${bl}px)
        hue-rotate(${rot}deg)
        sepia(${w}) 
        saturate(${s})
        invert(${i}%)`;
}

function changeBrightness(){
    const value = document.getElementById("Brightness").value;
    b=value*2/100;
    applyFilter();
}

function changeContrast(){
    const value = document.getElementById("Contrast").value;
    c=value*2/100;
    applyFilter();
}

function changeGrayscale(){
    const value = document.getElementById("Grayscale").value;
    g=value;
    applyFilter();
}

function changeWarmth(){
    const value = document.getElementById("Warmth").value;
    w = value*2/100;
    applyFilter();
}

function changeSaturation(){
    const value = document.getElementById("Saturation").value;
    s=value*2/100;
    applyFilter();
}

function changeRotate(){
    const value = document.getElementById("Rotate").value;
    rot=value;
    applyFilter();
}

function changeBlur(){
    const value = document.getElementById("Blur").value;
    bl=value;
    applyFilter();
}

function changeInvert(){
    const value = document.getElementById("Invert").value;
    i=value;
    applyFilter();
}


function reset(){
    b = 1
    c=1
    g=0
    s=0
    i=0 
    bl=0
    rot=0 
    w=0

    applyFilter();
    document.getElementById("Brightness").value = "50";
    document.getElementById("Contrast").value = "50";
    document.getElementById("Warmth").value = "0";
    document.getElementById("Invert").value = "0";
    document.getElementById("Grayscale").value = "0";
    document.getElementById("Saturation").value="0";
    document.getElementById("Blur").value="0";
}

function download() {
    
    if (img.src === "http://127.0.0.1:5500/JavaScript/photoEditingTool/index.html") {
      alert("Please Uplaod the Image First");
      return;
    }

    if (!img.complete) {
      alert("Image Upload is in Progress.  Please wait....");
      return;
    }

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const filter = getComputedStyle(img).filter;

    ctx.filter = filter === "none" ? "none" : filter;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL("image/png");

    const anchorTag = document.createElement("a");

    anchorTag.href = dataURL;

    anchorTag.download = "editedImage.png";

    document.body.appendChild(anchorTag);
    anchorTag.click();
    document.body.removeChild(anchorTag);
}



