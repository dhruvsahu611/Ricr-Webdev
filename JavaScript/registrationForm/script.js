function submit(){

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
    

    alert("Form Submitted");

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
}