function calculate(){
    const mainAmt = document.getElementById("amount").value;
    const tipPercent = document.getElementById("tip").value;
    const tnp = document.getElementById("people").value;

    const cal = ((Number(mainAmt)*Number(tipPercent))/100)/Number(tnp);

    document.getElementById("finalTip").innerText = `Tip Amount: ${cal}₹ for each.`;

}