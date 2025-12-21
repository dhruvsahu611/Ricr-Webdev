function reset(){
    window.location.reload();
}

function calculate(){

    document.getElementById("u1").innerHTML="";
    document.getElementById("u2").innerHTML="";
    document.getElementById("u3").innerHTML="";
    document.getElementById("u4").innerHTML="";
    

    let distance = Number(document.getElementById("distance").value);
    let totalBill=0;
	if(distance>100) {
		distance = distance-100;
		totalBill = totalBill + distance*9;
		
        document.getElementById("u1").innerHTML=`
            <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
                <p>For 100km and above distance: </p>  <p>${distance}km * ₹9 = ₹${totalBill.toFixed(2)}</p>
            </div>
        `
        distance = 100;
	}
	if(distance>10 && distance<=100) {
		distance = distance-10;
		totalBill = totalBill+distance*10;
        document.getElementById("u2").innerHTML=`
            <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
                <p>For distance between 10 and 100km: </p> <p>${distance}km * ₹10 = ₹${totalBill.toFixed(2)}</p>
            </div>
        `
		distance = 10;
	}
	
	if(distance<=10) {
		totalBill = totalBill + distance*11;
        document.getElementById("u3").innerHTML=`
            <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
                <p>For distance upto 10km:</p>
                <p>${distance}km * ₹11 = ₹${totalBill.toFixed(2)}</p>
            </div>
        `
	}

    document.getElementById("u4").innerHTML=`
        <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
            <h2>Total: </h2>
            <p class="fs-4">₹${totalBill.toFixed(2)}</p>
        </div>
    `

    return;

}