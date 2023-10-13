let bev=document.getElementById("bevitel").value;
let e=document.getElementById("elements");
let tomb=[];

function Kiiras()
{
    for(let x in tomb)
    {
        e.innerHTML+='<div id="elem">'+tomb[x]+"</div>";
    }
}

function getInputValue()
{
    let temp=bev;
    bev.value="";
    temp.split(' ');
    for(let x in temp)
    {
        tomb.push(temp[x]);
    }
}