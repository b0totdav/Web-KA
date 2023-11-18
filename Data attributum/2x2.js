let container=document.getElementById("container");
let colors=["yellow", "yellow", "yellow", "yellow"];


function Colorchange(index){
    if(colors[index]=="Red"){
        colors[index]="Blue";
    }
    else{
        colors[index]="Red";
    }
    Rajzolas();
}

function Rajzolas(){
    let ki="";
    for (let index = 0; index < 4; index++) {
        ki+='<div class="item" onclick="Colorchange('+index+')" style="background-color:'+colors[index]+';"></div>'
    }
    container.innerHTML=ki;
}