function submit(){
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();

    
    const data = {
        FullName: name,
        Age:age,
        Profession:profession,
        Hobbies:hobbies,
    };
    console.log(data);

    document.getElementById("innerDiv").innerHTML=`
        <div class="w-100 my-3">
            <h2 class="fs-5 mb-0 text-dark">Your Entered Details:</h2>

            <div class="w-100 d-flex justify-content-between gap-3">
                <p class="bg-white p-3 rounded-3 border-1 border-secondary-subtle w-50 mt-1 fs-5">Your Name :</p>
                <p class="bg-white p-3 rounded-3 border-1 border-secondary-subtle w-50 mt-1 fs-5">${data.FullName}</p>
                <hr>
            </div>
            <div class="w-100 d-flex justify-content-between gap-3">
                <p class="bg-white p-3 rounded-3 border-1 border-secondary-subtle w-50 mt-1 fs-5">Your Age :</p>
                <p class="bg-white p-3 rounded-3 border-1 border-secondary-subtle w-50 mt-1 fs-5">${data.Age}</p>
                <hr>
            </div>
            <div class="w-100 d-flex justify-content-between gap-3">
                <p class="bg-white p-3 rounded-3 border-1 border-secondary-subtle w-50 mt-1 fs-5">Your Profession :</p>
                <p class="bg-white p-3 rounded-3 border-1 border-secondary-subtle w-50 mt-1 fs-5">${data.Profession}</p>
                <hr>
            </div>
            <div class="w-100 d-flex justify-content-between gap-3">
                <p class="bg-white p-3 rounded-3 border-1 border-secondary-subtle w-50 mt-1 fs-5">Your Hobbies :</p>
                <p class="bg-white p-3 rounded-3 border-1 border-secondary-subtle w-50 mt-1 fs-5">${data.Hobbies}</p>
                <hr>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <h3 class="text-secondary">Thank you for registration. We will contact you soon.</h3>
            <img src="birthdayimg.jpeg" alt="">
        </div>
    `;
    
    document.getElementById("button").innerHTML="";

}