function submit(){
    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value.trim();

    

    if(!/^[A-Za-z ]+$/.test(name)){
        alert("Please Enter Correct Name.");
        return;
    }

    if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email)){
        alert("Please Enter Correct Email.");
        return;
    }

    if(!/^[6-9]\d{9}$/.test(number)){
        alert("Please Enter Correct Number.");
        return;
    }

    const currDate=new Date().getFullYear();

    const birthYear = Number(dob.split("-")[0]);
    if(currDate-birthYear<17){
        alert("Your are not eligible by Age.");
        return;
    }
    

    // use logic of age calculator for date


    const data = {
        FullName: name,
        Email:email,
        Phone:number,
        DOB:dob
    };
    console.log(data);
}