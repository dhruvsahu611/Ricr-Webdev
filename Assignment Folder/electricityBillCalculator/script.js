function reset(){
    window.location.reload();
}

function calculate(){

    document.getElementById("u1").innerHTML="";
    document.getElementById("u2").innerHTML="";
    document.getElementById("u3").innerHTML="";
    document.getElementById("u4").innerHTML="";
    document.getElementById("u5").innerHTML="";
    document.getElementById("u6").innerHTML="";

    let units = Number(document.getElementById("units").value);
    let totalBill=0;
	if(units>450) {
		units = units-450;
		totalBill = totalBill + units*1.5;
		
        document.getElementById("u1").innerHTML=`
            <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
                <p>For 450 and above Units: </p>  <p>${units}U * ₹1.5 = ₹${totalBill.toFixed(2)}</p>
            </div>
        `
        units = 450;
	}
	if(units>200 && units<=450) {
		units = units-200;
		totalBill = totalBill+units*1.2;
        document.getElementById("u2").innerHTML=`
            <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
                <p>For units between 250 and 450: </p> <p>${units}U * ₹1.2 = ₹${totalBill.toFixed(2)}</p>
            </div>
        `
		units = 200;
	}
	if(units>50 && units<=200) {
		units = units -50;
		totalBill = totalBill + units*0.75;
        document.getElementById("u3").innerHTML=`
            <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
                <p>For units between 50 to 200:</p>
                <p>${units}U * ₹0.75 = ₹${totalBill.toFixed(2)}</p>
            </div>
        `
		units = 50;
	}
	if(units<=50) {
		totalBill = totalBill + units*0.5;
        document.getElementById("u4").innerHTML=`
            <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
                <p>For units upto 50:</p>
                <p>${units}U * ₹0.5 = ₹${totalBill.toFixed(2)}</p>
            </div>
        `
	}

    document.getElementById("u5").innerHTML=`
        <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
            <h2>Subtotal: </h2>
            <p class="fs-4">₹${totalBill.toFixed(2)}</p>
        </div>
    `
    totalBill=totalBill+(totalBill*20)/100;
    document.getElementById("u6").innerHTML=`
        <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
            <h2>Total Charge After Adding Surcharge(20%): </h2>
            <p class="fs-4">₹${totalBill.toFixed(2)}</p>
        </div>
    `

    return;

}