function submit(){
    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("contactError").innerHTML="";
    document.getElementById("dateError").innerHTML="";
    document.getElementById("qualificationError").innerHTML="";
    document.getElementById("percentageError").innerHTML="";
    document.getElementById("courseError").innerHTML="";
    document.getElementById("shiftError").innerHTML="";
    document.getElementById("addressError").innerHTML="";
    document.getElementById("cityError").innerHTML="";
    document.getElementById("pincodeError").innerHTML="";
    document.getElementById("gaurdianError").innerHTML="";
    document.getElementById("gaurdianContactError").innerHTML="";
    document.getElementById("hearError").innerHTML="";


    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const dob = document.getElementById("dob").value;
    const qualification = document.getElementById("qualification").value;
    const percent = document.getElementById("percentage").value;
    const course = document.getElementById("course").value;

    const batch = document.querySelectorAll("input[name='batch']:checked");
    let selectedBatchTiming = [];
    batch.forEach((element)=>{
        selectedBatchTiming.push(element.value);
    });

    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pincode = document.getElementById("pincode").value;
    const gaurdianName = document.getElementById("gaurdianName").value;
    const gaurdianNumber = document.getElementById("gaurdianNumber").value;
    const hear = document.getElementById("hear").value;
    const special = document.getElementById("special").value;
    
    if (!fullName) {
        document.getElementById("nameError").innerText = "Required";
        return;
    } else if (!/^[A-Za-z ]+$/.test(fullName)) {
        document.getElementById("nameError").innerText =
        "Please enter a valid name";
        return;
    }

    if(!email){
        document.getElementById("emailError").innerText = "Required";
        return;
    }
    else if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email)){
        document.getElementById("emailError").innerText =
        "Please enter a valid email address";
        return;
    }

    if(!number){
        document.getElementById("contactError").innerText = "Required";
        return;
    }
    else if(!/^[6-9]\d{9}$/.test(number)){
        document.getElementById("contactError").innerText =
        "Only 10 digit Indian Number Allowed Starts from 9, 7, 8 or 6";
        return;
    }

    if(!dob){
        document.getElementById("dateError").innerText="Required";
        return;
    }
    else if((new Date().getFullYear()-document.getElementById("dob").value.split("-")[0])<15){
        document.getElementById("dateError").innerText="Only 15 years and above persons are eligible";
        return;
    }

    if(!qualification){
        document.getElementById("qualificationError").innerText="Please select a qualification";
        return;
    }

    if(!percent){
        document.getElementById("percentageError").innerText="Required";
        return;
    }
    else if(!/^[1-9]\d$/.test(percent)){
        document.getElementById("percentageError").innerText="Enter a valid percentage or grade";
        return;
    }
    
    if(!course){
        document.getElementById("courseError").innerText="Select a course" ;
        return;
    }

    if(selectedBatchTiming.length==0){
        document.getElementById("shiftError").innerText="Select a batch timing";
        return;
    }

    if(!address){
        document.getElementById("addressError").innerText="Enter valid address";
        return;
    }


    if(!city){
        document.getElementById("cityError").innerText="Required";
        return;
    }
    else if(!/^[A-Za-z ]{2,}$/.test(city)){
        document.getElementById("cityError").innerText="Enter a valid city.";
        return;
    }


    if(!pincode){
        document.getElementById("pincodeError").innerText = "Required";
        return;
    }
    else if(!/^[\d]{6}$/.test(pincode)){
        document.getElementById("pincodeError").innerText =
        "Only 6 digit Indian Pincode Allowed";
        return;
    }


    if (!gaurdianName) {
        document.getElementById("gaurdianError").innerText = "Required";
        return;
    } else if (!/^[A-Za-z ]+$/.test(gaurdianName)) {
        document.getElementById("gaurdianError").innerText =
        "Please enter a valid name";
        return;
    }
    
    if(!gaurdianNumber){
        document.getElementById("gaurdianContactError").innerText = "Required";
        return;
    }
    else if(!/^[6-9]\d{9}$/.test(gaurdianNumber)){
        document.getElementById("gaurdianContactError").innerText =
        "Only 10 digit Indian Number Allowed Starts from 9, 7, 8 or 6";
        return;
    }

    if(!hear){
        document.getElementById("hearError").innerText="Select an option";
        return;
    }


    console.log(fullName);
    console.log(email);

    console.log(number);
    console.log(dob);

    console.log(qualification);
    console.log(percent);

    console.log(course);

    console.log(selectedBatchTiming);

    console.log(address);
    console.log(city);

    console.log(pincode);
    console.log(gaurdianName);

    console.log(gaurdianNumber);
    console.log(hear);

    console.log(special);

    

    alert("Form Submitted");
}