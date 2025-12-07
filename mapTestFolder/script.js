function enter(){
    const state = document.getElementById("state").value.trim().toLowerCase();

    const flag = document.createElement("i");
    flag.classList.add("bi", "bi-geo", "text-danger", "fs-3");
    flag.style.position = "absolute";

    if(state === "madhya pradesh"){
        flag.style.top="700px";
        flag.style.left="300px";
        flag.title="State: Madhya Pradesh \n Capital: Bhopal";
    }
    else if(state === "arunachal pradesh"){
        flag.style.top="480px";
        flag.style.left="900px";
        flag.title="State: Arunachal Pradesh \n Capital: Itanagar";
    }
    else if(state === "andhra pradesh"){
        flag.style.top="950px";
        flag.style.left="430px";
        flag.title="State: Andhra Pradesh \n Capital: Amravati";
    }
    else if(state === "assam"){
        flag.style.top="520px";
        flag.style.left="900px";
        flag.title="State: Assam \n Capital: Dispur";
    }
    else if(state === "bihar"){
        flag.style.top="550px";
        flag.style.left="600px";
        flag.title="State: Bihar \n Capital: Patna";
    }
    else if(state === "chhattisgarh"){
        flag.style.top="750px";
        flag.style.left="500px";
        flag.title="State: Chattisgarh \n Capital: Raipur";
    }
    else if(state === "goa"){
        flag.style.top="970px";
        flag.style.left="222px";
        flag.title="State: Goa \n Capital: Panaji";
    }
    else if(state === "gujarat"){
        flag.style.top="700px";
        flag.style.left="150px";
        flag.title="State: Gujarat \n Capital: Gandhinagar";
    }
    else if(state === "haryana"){
        flag.style.top="450px";
        flag.style.left="320px";
        flag.title="State: Haryana \n Capital: Chandigarh";
    }
    else if(state==="delhi"){
        flag.style.top="455px";
        flag.style.left="350px";
        flag.title="Capital: New Delhi";
    }
    else if(state === "himachal pradesh"){
        flag.style.top="330px";
        flag.style.left="350px";
        flag.title="State: Himachal Pradesh \n Capital: Shimla";
    }
    else if(state === "jammu and kashmir"){
        flag.style.top="250px";
        flag.style.left="350px";
        flag.title="State: Jammu and Kashmir \n Capital: Srinagar";
    }

    else if(state === "jharkhand"){
        flag.style.top="680px";
        flag.style.left="600px";
        flag.title="State: Jharkhand \n Capital: Ranchi";
    }
    else if(state === "karnataka"){
        flag.style.top="950px";
        flag.style.left="300px";
        flag.title="State: Karnataka \n Capital: Bengaluru";
    }
    else if(state === "kerala"){
        flag.style.top="1200px";
        flag.style.left="300px";
        flag.title="State: Kerala \n Capital: Thiruvananthapuram";
    }
    else if(state === "maharashtra"){
        flag.style.top="800px";
        flag.style.left="300px";
        flag.title="State: Maharashtra \n Capital: Mumbai";
    }
    else if(state === "manipur"){
        flag.style.top="600px";
        flag.style.left="900px";
        flag.title="State: Manipur \n Capital: Imphal";
    }
    else if(state === "meghalaya"){
        flag.style.top="580px";
        flag.style.left="830px";
        flag.title="State: Meghalaya \n Capital: Shillong";
    }
    else if(state === "mizoram"){
        flag.style.top="680px";
        flag.style.left="870px";
        flag.title="State: Mizoram \n Capital: Aizawl";
    }
    else if(state === "nagaland"){
        flag.style.top="550px";
        flag.style.left="920px";
        flag.title="State: Nagaland \n Capital: Kohima";
    }
    else if(state === "orissa"){
        flag.style.top="800px";
        flag.style.left="550px";
        flag.title="State: Orissa \n Capital: Bhubaneshwar";
    }
    else if(state === "punjab"){
        flag.style.top="400px";
        flag.style.left="300px";
        flag.title="State: Punjab \n Capital: Chandigarh";
    }
    else if(state === "rajasthan"){
        flag.style.top="530px";
        flag.style.left="300px";
        flag.title="State: Rajasthan \n Capital: Jaipur";
    }
    else if(state === "sikkim"){
        flag.style.top="700px";
        flag.style.left="300px";
        flag.title="State: Sikkim \n Capital: Gangtok";
    }
    else if(state === "tamil nadu"){
        flag.style.top="1200px";
        flag.style.left="350px";
        flag.title="State: Tamil Nadu \n Capital: Chennai";
    }
    else if(state === "telangana"){
        flag.style.top="900px";
        flag.style.left="400px";
        flag.title="State: Telangana \n Capital: Hyderabad";
    }
    else if(state === "tripura"){
        flag.style.top="650px";
        flag.style.left="830px";
        flag.title="State: Tripura \n Capital: Agartala";
    }
    else if(state === "uttar pradesh"){
        flag.style.top="550px";
        flag.style.left="500px";
        flag.title="State: Uttar Pradesh \n Capital: Lucknow";
    }
    else if(state === "uttrakhand"){
        flag.style.top="400px";
        flag.style.left="400px";
        flag.title="State: Uttrakhand \n Capital: Dehradun";
    }
    else if(state === "west bengal"){
        flag.style.top="700px";
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