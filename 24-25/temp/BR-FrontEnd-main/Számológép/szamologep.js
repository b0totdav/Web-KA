function Override(){
    let output=document.getElementById("kepernyo");
    console.log(output.value);
    let result=eval(output.value);
    console.log(result);
    output.value=result;
}

function Write(input)
{
    let output=document.getElementById("kepernyo");
    output.value+=input;
    console.log(output.value)
    
}

function Delete(){
    let output=document.getElementById("kepernyo");
    output.value=""
}