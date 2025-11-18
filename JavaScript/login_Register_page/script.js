function login(){
    console.log("Login Button Clicked");

    const em = document.getElementById("LoginEmail").value;
    const ps = document.getElementById("LoginPassword").value;
    console.log("Email : "+em);
    console.log("Password : "+ps);

    alert("Login Done");
    document.getElementById("LoginEmail").value="";
    document.getElementById("LoginPassword").value="";
}



function registration(){
    console.log("Registration Button Clicked");

    const name = document.getElementById("RegisterName").value;
    const email = document.getElementById("RegisterEmail").value;
    const create = document.getElementById("RegisterPassword").value;
    const confirm = document.getElementById("RegisterConfirmPassword").value;

    console.log("Registered Name: "+name);
    console.log("Registered Email: "+email);
    console.log("Registered Password : "+create);
    console.log("Registered Confirm Passowrd : "+confirm);

    alert("Registration Done");

    document.getElementById("RegisterName").value="";
    document.getElementById("RegisterEmail").value="";
    document.getElementById("RegisterPassword").value="";
    document.getElementById("RegisterConfirmPassword").value="";
}