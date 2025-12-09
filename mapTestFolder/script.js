let soundEnabled = true;

function playSound(){
    if(!soundEnabled) return;

    const sound = document.getElementById("soundPop");
    sound.currentTime = 0; 
    sound.play();
}

document.getElementById("soundButton").addEventListener("click", function() {
    soundEnabled = !soundEnabled;

    this.textContent = soundEnabled ? "Sound: ON" : "Sound: OFF";
});

function enter(){
    const state = document.getElementById("state").value.trim().toLowerCase();

    playSound();

    const flag = document.createElement("i");
    flag.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag.style.position = "absolute";

    if(state === "madhya pradesh"){
        flag.style.top="560px";
        flag.style.left="350px";
        flag.title="State: Madhya Pradesh \n Capital: Bhopal";
    }
    else if(state === "arunachal pradesh"){
        flag.style.top="350px";
        flag.style.left="900px";
        flag.title="State: Arunachal Pradesh \n Capital: Itanagar";
    }
    else if(state === "andhra pradesh"){
        flag.style.top="900px";
        flag.style.left="400px";
        flag.title="State: Andhra Pradesh \n Capital: Amravati";
    }
    else if(state === "assam"){
        flag.style.top="440px";
        flag.style.left="860px";
        flag.title="State: Assam \n Capital: Dispur";
    }
    else if(state === "bihar"){
        flag.style.top="470px";
        flag.style.left="620px";
        flag.title="State: Bihar \n Capital: Patna";
    }
    else if(state === "chhattisgarh"){
        flag.style.top="650px";
        flag.style.left="500px";
        flag.title="State: Chattisgarh \n Capital: Raipur";
    }
    else if(state === "goa"){
        flag.style.top="865px";
        flag.style.left="222px";
        flag.title="State: Goa \n Capital: Panaji";
    }
    else if(state === "gujarat"){
        flag.style.top="550px";
        flag.style.left="150px";
        flag.title="State: Gujarat \n Capital: Gandhinagar";
    }
    else if(state === "haryana"){
        flag.style.top="330px";
        flag.style.left="320px";
        flag.title="State: Haryana \n Capital: Chandigarh";
    }
    else if(state==="delhi"){
        flag.style.top="345px";
        flag.style.left="350px";
        flag.title="Capital: New Delhi";
    }
    else if(state === "himachal pradesh"){
        flag.style.top="225px";
        flag.style.left="350px";
        flag.title="State: Himachal Pradesh \n Capital: Shimla";
    }
    else if(state === "jammu and kashmir"){
        flag.style.top="120px";
        flag.style.left="350px";
        flag.title="State: Jammu and Kashmir \n Capital: Srinagar";
    }

    else if(state === "jharkhand"){
        flag.style.top="550px";
        flag.style.left="600px";
        flag.title="State: Jharkhand \n Capital: Ranchi";
    }
    else if(state === "karnataka"){
        flag.style.top="950px";
        flag.style.left="300px";
        flag.title="State: Karnataka \n Capital: Bengaluru";
    }
    else if(state === "kerala"){
        flag.style.top="1100px";
        flag.style.left="300px";
        flag.title="State: Kerala \n Capital: Thiruvananthapuram";
    }
    else if(state === "maharashtra"){
        flag.style.top="700px";
        flag.style.left="300px";
        flag.title="State: Maharashtra \n Capital: Mumbai";
    }
    else if(state === "manipur"){
        flag.style.top="500px";
        flag.style.left="900px";
        flag.title="State: Manipur \n Capital: Imphal";
    }
    else if(state === "meghalaya"){
        flag.style.top="465px";
        flag.style.left="830px";
        flag.title="State: Meghalaya \n Capital: Shillong";
    }
    else if(state === "mizoram"){
        flag.style.top="550px";
        flag.style.left="870px";
        flag.title="State: Mizoram \n Capital: Aizawl";
    }
    else if(state === "nagaland"){
        flag.style.top="430px";
        flag.style.left="920px";
        flag.title="State: Nagaland \n Capital: Kohima";
    }
    else if(state === "orissa"){
        flag.style.top="700px";
        flag.style.left="550px";
        flag.title="State: Orissa \n Capital: Bhubaneshwar";
    }
    else if(state === "punjab"){
        flag.style.top="280px";
        flag.style.left="300px";
        flag.title="State: Punjab \n Capital: Chandigarh";
    }
    else if(state === "rajasthan"){
        flag.style.top="400px";
        flag.style.left="300px";
        flag.title="State: Rajasthan \n Capital: Jaipur";
    }
    else if(state === "sikkim"){
        flag.style.top="385px";
        flag.style.left="720px";
        flag.title="State: Sikkim \n Capital: Gangtok";
    }
    else if(state === "tamil nadu"){
        flag.style.top="1050px";
        flag.style.left="350px";
        flag.title="State: Tamil Nadu \n Capital: Chennai";
    }
    else if(state === "telangana"){
        flag.style.top="800px";
        flag.style.left="400px";
        flag.title="State: Telangana \n Capital: Hyderabad";
    }
    else if(state === "tripura"){
        flag.style.top="540px";
        flag.style.left="830px";
        flag.title="State: Tripura \n Capital: Agartala";
    }
    else if(state === "uttar pradesh"){
        flag.style.top="450px";
        flag.style.left="500px";
        flag.title="State: Uttar Pradesh \n Capital: Lucknow";
    }
    else if(state === "uttrakhand"){
        flag.style.top="270px";
        flag.style.left="400px";
        flag.title="State: Uttrakhand \n Capital: Dehradun";
    }
    else if(state === "west bengal"){
        flag.style.top="550px";
        flag.style.left="700px";
        flag.title="State: West Bengal \n Capital: Kolkata";
    }
    else{
        alert("State Not Found enter again:");
    }

    document.getElementById("mapimg").appendChild(flag);
    document.getElementById("state").value="";
    
}
function reset(){
    window.location.reload();
}

function addAll(){
    playSound();
    const flag1 = document.createElement("i");
    flag1.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag1.style.position = "absolute";

    flag1.style.top="560px";
    flag1.style.left="350px";
    flag1.title="State: Madhya Pradesh \n Capital: Bhopal";

    document.getElementById("mapimg").appendChild(flag1);

    const flag2 = document.createElement("i");
    flag2.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag2.style.position = "absolute";

    flag2.style.top="350px"
    flag2.style.left="900px";
    flag2.title="State: Arunachal Pradesh \n Capital: Itanagar";
    document.getElementById("mapimg").appendChild(flag2);


    const flag3 = document.createElement("i");
    flag3.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag3.style.position = "absolute";
    flag3.style.top="900px";
    flag3.style.left="400px";
    flag3.title="State: Andhra Pradesh \n Capital: Amravati";

    document.getElementById("mapimg").appendChild(flag3);

    const flag4 = document.createElement("i");
    flag4.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag4.style.position = "absolute";
    flag4.style.top="440px"
    flag4.style.left="860px";
    flag4.title="State: Assam \n Capital: Dispur";
    document.getElementById("mapimg").appendChild(flag4);


    const flag5 = document.createElement("i");
    flag5.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag5.style.position = "absolute";
    flag5.style.top="470px";
    flag5.style.left="620px";
    flag5.title="State: Bihar \n Capital: Patna";

    document.getElementById("mapimg").appendChild(flag5);

    const flag6 = document.createElement("i");
    flag6.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag6.style.position = "absolute";
    flag6.style.top="650px"
    flag6.style.left="500px";
    flag6.title="State: Chhattisgarh \n Capital: Raipur";
    document.getElementById("mapimg").appendChild(flag6);


    const flag7 = document.createElement("i");
    flag7.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag7.style.position = "absolute";
    flag7.style.top="865px";
    flag7.style.left="222px";
    flag7.title="State: Goa \n Capital: Panaji";

    document.getElementById("mapimg").appendChild(flag7);

    const flag8 = document.createElement("i");
    flag8.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag8.style.position = "absolute";
    flag8.style.top="550px"
    flag8.style.left="150px";
    flag8.title="State: Gujarat \n Capital: Gandhinagar";
    document.getElementById("mapimg").appendChild(flag8);

    const flag10 = document.createElement("i");
    flag10.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag10.style.position = "absolute";

    flag10.style.top="330px";
    flag10.style.left="320px";
    flag10.title="State: Haryana \n Capital: Chandigarh";

    document.getElementById("mapimg").appendChild(flag10);

    const flag11 = document.createElement("i");
    flag11.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag11.style.position = "absolute";
    flag11.style.top="345px"
    flag11.style.left="350px";
    flag11.title="Capital: New Delhi";
    document.getElementById("mapimg").appendChild(flag11);


    const flag12 = document.createElement("i");
    flag12.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag12.style.position = "absolute";

    flag12.style.top="225px";
    flag12.style.left="350px";
    flag12.title="State: Himachal Pradesh \n Capital: Shimla";

    document.getElementById("mapimg").appendChild(flag12);

    const flag13 = document.createElement("i");
    flag13.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag13.style.position = "absolute";
    flag13.style.top="120px"
    flag13.style.left="350px";
    flag13.title="State: Jammu and Kashmir \n Capital: Srinagar";
    document.getElementById("mapimg").appendChild(flag13);


    const flag14 = document.createElement("i");
    flag14.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag14.style.position = "absolute";
    flag14.style.top="550px";
    flag14.style.left="600px";
    flag14.title="State: JharKhand \n Capital: Ranchi";

    document.getElementById("mapimg").appendChild(flag14);

    const flag15 = document.createElement("i");
    flag15.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag15.style.position = "absolute";
    flag15.style.top="950px"
    flag15.style.left="300px";
    flag15.title="State: Karnataka \n Capital: Bengaluru";
    document.getElementById("mapimg").appendChild(flag15);


    const flag16 = document.createElement("i");
    flag16.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag16.style.position = "absolute";
    flag16.style.top="1100px";
    flag16.style.left="300px";
    flag16.title="State: Kerala \n Capital: Thiruvananthapuram";

    document.getElementById("mapimg").appendChild(flag16);

    const flag17 = document.createElement("i");
    flag17.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag17.style.position = "absolute";
    flag17.style.top="700px"
    flag17.style.left="300px";
    flag17.title="State: Maharashtra \n Capital: Mumbai";
    document.getElementById("mapimg").appendChild(flag17);


    const flag18 = document.createElement("i");
    flag18.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag18.style.position = "absolute";
    flag18.style.top="500px"
    flag18.style.left="900px";
    flag18.title="State: Manipur \n Capital: Imphal";
    document.getElementById("mapimg").appendChild(flag18);

    const flag19 = document.createElement("i");
    flag19.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag19.style.position = "absolute";
    flag19.style.top="465px"
    flag19.style.left="830px";
    flag19.title="State: Meghalaya \n Capital: Shillong";
    document.getElementById("mapimg").appendChild(flag19);

    const flag20 = document.createElement("i");
    flag20.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag20.style.position = "absolute";
    flag20.style.top="550px"
    flag20.style.left="870px";
    flag20.title="State: Mizoram \n Capital: Aizawl";
    document.getElementById("mapimg").appendChild(flag20);

    const flag21 = document.createElement("i");
    flag21.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag21.style.position = "absolute";
    flag21.style.top="430px"
    flag21.style.left="920px";
    flag21.title="State: Nagaland \n Capital: Kohima";
    document.getElementById("mapimg").appendChild(flag21);

    const flag22 = document.createElement("i");
    flag22.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag22.style.position = "absolute";
    flag22.style.top="700px"
    flag22.style.left="550px";
    flag22.title="State: Orissa \n Capital: Bhubaneshwar";
    document.getElementById("mapimg").appendChild(flag22);

    const flag23 = document.createElement("i");
    flag23.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag23.style.position = "absolute";
    flag23.style.top="280px"
    flag23.style.left="300px";
    flag23.title="State: Punjab \n Capital: Chandigarh";
    document.getElementById("mapimg").appendChild(flag23);

    const flag24 = document.createElement("i");
    flag24.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag24.style.position = "absolute";
    flag24.style.top="400px"
    flag24.style.left="300px";
    flag24.title="State: Rajasthan \n Capital: Jaipur";
    document.getElementById("mapimg").appendChild(flag24);

    const flag25 = document.createElement("i");
    flag25.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag25.style.position = "absolute";
    flag25.style.top="385px"
    flag25.style.left="720px";
    flag25.title="State: Sikkim \n Capital: Gangtok";
    document.getElementById("mapimg").appendChild(flag25);

    const flag26 = document.createElement("i");
    flag26.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag26.style.position = "absolute";
    flag26.style.top="1050px"
    flag26.style.left="350px";
    flag26.title="State: Tamil Nadu \n Capital: Chennai";
    document.getElementById("mapimg").appendChild(flag26);

    const flag27 = document.createElement("i");
    flag27.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag27.style.position = "absolute";
    flag27.style.top="800px"
    flag27.style.left="400px";
    flag27.title="State: Telangana \n Capital: Hyderabad";
    document.getElementById("mapimg").appendChild(flag27);

    const flag28 = document.createElement("i");
    flag28.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag28.style.position = "absolute";
    flag28.style.top="540px"
    flag28.style.left="830px";
    flag28.title="State: Tripura \n Capital: Agartala";
    document.getElementById("mapimg").appendChild(flag28);

    const flag29 = document.createElement("i");
    flag29.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag29.style.position = "absolute";
    flag29.style.top="450px"
    flag29.style.left="500px";
    flag29.title="State: Uttar Pradesh \n Capital: Lucknow";
    document.getElementById("mapimg").appendChild(flag29);

    const flag30 = document.createElement("i");
    flag30.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag30.style.position = "absolute";
    flag30.style.top="270px"
    flag30.style.left="400px";
    flag30.title="State: Uttrakhand \n Capital: Dehradun";
    document.getElementById("mapimg").appendChild(flag30);


    const flag31 = document.createElement("i");
    flag31.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag31.style.position = "absolute";
    flag31.style.top="550px"
    flag31.style.left="700px";
    flag31.title="State: West Bengal \n Capital: Kolkata";
    document.getElementById("mapimg").appendChild(flag31);

}