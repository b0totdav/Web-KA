let eclipse=document.getElementById("lightAndDark");

function valtas(){

   
    if(eclipse.innerText=="Sötét mód"){
        eclipse.innerText="Világos mód";
        let body=document.getElementsByTagName("body");
        body[0].style.backgroundImage = "url('../kepek/2.png')";
        let f1=document.getElementsByClassName("f1")
        for (let i = 0; i < f1.length; i++) {
            f1[i].style.backgroundColor = "darkred";
          }
    }else{
        eclipse.innerText="Sötét mód";
        let body=document.getElementsByTagName("body");
        body[0].style.backgroundImage = "url('../kepek/trueno.jpg')";
        let f1=document.getElementsByClassName("f1")
        for (let i = 0; i < f1.length; i++) {
            f1[i].style.backgroundColor = "crimson";
          }
    }
}
