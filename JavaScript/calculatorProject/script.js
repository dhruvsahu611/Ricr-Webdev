function Input(char){
    if(char === '='){
        try{
            const exp = document.getElementById("display").value;
            document.getElementById("display").value = eval(exp);
        }
        catch(error){
            alert("Invalid Expression");
            document.getElementById("display").value="Error 404 Invalid";
        }
    }

    else if(char === 'C'){
        document.getElementById("display").value="";
    }
    else{
        let exp = document.getElementById("display").value;
        exp = exp+char;
        document.getElementById("display").value=exp;
    }
}