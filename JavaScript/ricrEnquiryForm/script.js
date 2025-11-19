function submit(){
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const qualification = document.getElementById("qualification").value;
    const college = document.getElementById("college").value;
    const year = document.getElementById("year").value;
    const branch = document.getElementById("branch").value;

    const source = document.getElementById("source").value;
    const executive = document.getElementById("executive").value;

    console.log(name);
    console.log(number);
    console.log(email);
    console.log(qualification);
    console.log(college);
    console.log(year);
    console.log(branch);
    console.log(source);
    console.log(executive);

    alert("Form filled we will contact you asap.");

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("qualification").value="";
    document.getElementById("branch").value="";
    document.getElementById("year").value="";

    document.getElementById("college").value="";
    document.getElementById("source").value="";
    document.getElementById("executive").value="Name of Executive";

}