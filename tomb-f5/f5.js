let e=document.getElementById("kiiras");
let tomb=[1,2,3,4,5];
function Elso()
{
    e.innerHTML=tomb[0];
}
function Masodik()
{
    e.innerHTML=tomb[1];  
}
function Harmadik()
{
    e.innerHTML=tomb[2];  
}
function Osszes()
{
    e.innerHTML="";
    for(let x in tomb)
    {
        e.innerHTML+=tomb[x];
    }
}
function Hozzaad()
{
    let bev=document.getElementById("bevitel").value;
    tomb.push(bev);
}
function Hossz()
{
    e.innerHTML="A tömb "+tomb.length+" elemet tartalmaz";
}
function Kivetel()
{
    let kiv=document.getElementById("kivetel").value;
    tomb.splice(kiv,1)
}