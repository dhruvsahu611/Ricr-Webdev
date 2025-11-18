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

    alert("Demo class registered");
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("course").value="";
    document.getElementById("branch").value="";
    document.getElementById("year").value="";

}