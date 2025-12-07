function home(){
    window.open("http://127.0.0.1:5500/testFolder/index.html");
}

function course(){
    window.open("http://127.0.0.1:5500/testFolder/course.html");
}
function testimonials(){
    window.open("http://127.0.0.1:5500/testFolder/testimonials.html");
}

function contact(){
    window.open("http://127.0.0.1:5500/testFolder/contact.html");
}

function demo(){
    window.open("http://127.0.0.1:5500/JavaScript/ricrDemoForm/index.html");
}


function bookNow(){
    console.log("Demo Class Booked");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("number").value;
    const course = document.getElementById("course").value;
    const branch = document.getElementById("branch").value;
    const year = document.getElementById("year").value;

    console.log(name);
    console.log(email);
    console.log(contact);
    console.log(course);
    console.log(branch);
    console.log(year);

    alert(`"Thank you for Enrolling,"+ ${name} +"!"`);
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("course").value="";
    document.getElementById("branch").value="";
    document.getElementById("year").value="";

}

function enq(){
    window.open("http://127.0.0.1:5500/testFolder/contact.html");
}