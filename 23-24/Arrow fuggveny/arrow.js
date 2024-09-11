const Megforditas=()=>{
    let e=document.getElementById("ki");
    e.innerHTML="";
    let szoveg =document.getElementById("szoveg").value;
    console.log(szoveg);
    const vissz=szoveg.split("");
    console.log(vissz)
    vissz.reverse();
    console.log(vissz)
    for(let betu in vissz)
    {
        e.innerHTML+=vissz[betu];
    }

};