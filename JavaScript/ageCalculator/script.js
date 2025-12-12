function calculate(){
    const curd = Number(document.getElementById("currDate").value.split("-")[0]);
    const birth = Number(document.getElementById("birthDate").value.split("-")[0]);

    const cal = curd-birth;

    document.getElementById("finalAge").innerText = `Your Age : ${cal} years.`;

    const img = document.createElement("img");
    img.src = "birthdayimg.jpeg";

    document.getElementById("imageDiv").appendChild(img);
}