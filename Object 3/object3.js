let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
}

function osszesen(fizetesek){
    let osszeg=fizetesek.Anna+fizetesek.Cecil+fizetesek.Emil+fizetesek.Gerald;
    return osszeg;
}

console.log("Anna: "+{fizetes.Anna}+"Ft\nCecil: "+{fizetes.Cecil}+"Ft\nEmil: "+{fizetes.Emil}+"Ft\nGerald: "+{fizetes.Gerald}+"Ft}");
console.log("összesen:"+osszesen(fizetes)+" Ft")

let e=document.getElementById("ki").innerHTML;

e+="Anna: ${fizetes.Anna}Ft\nCecil: ${fizetes.Cecil}Ft\nEmil: ${fizetes.Emil}Ft\nGerald: ${fizetes.Gerald}Ft}"
e+="\n összesen:"+osszesen(fizetes)+" Ft";