function reset(){
    window.location.reload();
}

function calculate(){

    document.getElementById("u1").innerHTML="";
    document.getElementById("u2").innerHTML="";
    document.getElementById("u3").innerHTML="";
    document.getElementById("u4").innerHTML="";
    document.getElementById("errorInput").innerHTML="";
    

    let salary = Number(document.getElementById("salary").value);
    if(salary<0){
        document.getElementById("errorInput").innerText="Please enter correct salary*";
        return;
    }


    let cal = calculateGrossSalary(salary);
	document.getElementById("u1").innerHTML=`
        <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
            <p>Basic Salary: </p>  <p>₹${salary.toFixed(2)}</p>
        </div>
    `
	document.getElementById("u2").innerHTML=`
        <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
            <p>House Rent Allowance(HRA):</p> <p>₹${cal.Hra.toFixed(2)}</p>
        </div>
    `
    document.getElementById("u3").innerHTML=`
        <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
            <p>Dearness Allowance: </p> <p>₹${cal.DA.toFixed(2)}</p>
        </div>
    `
	

    document.getElementById("u4").innerHTML=`
        <div class="m-2 bg-white w-50 rounded p-2 fs-5 d-flex justify-content-between border-bottom">
            <h2>Total Gross Salary: </h2>
            <p class="fs-4">₹${cal.Gross.toFixed(2)}</p>
        </div>
    `

    return;

}

function calculateGrossSalary(salary) {
		let hra=0, da = 0;
		if(salary<1500) {
			hra = salary*0.10;
			da = salary*0.90;
		}
		else {
			hra = 500;
			da = salary*0.98;
		}
		return {
            Gross: (salary+hra+da),
            Hra: hra,
            DA: da
        };
	}