let eclipse=document.getElementById("lightAndDark");

function valtas(){

   
    if(eclipse.innerText=="Sötét mód"){
        eclipse.innerText="Világos mód";
        let body=document.getElementsByTagName("body");
        body[0].style.backgroundImage = "url('../kepek/2.png')";
        let div=document.getElementsByTagName("div")
          for (let i = 0; i < div.length; i++) {
              div[i].style.backgroundColor = "rgba(0,0,0,0.7)";
              div[i].style.color = "white";
            }
        let f1=document.getElementsByClassName("f1")
        for (let i = 0; i < f1.length; i++) {
            f1[i].style.backgroundColor = "darkred";
          }
        let duo=document.getElementsByClassName("duolingo")
          for (let i = 0; i < duo.length; i++) {
              duo[i].style.backgroundColor = "darkgreen";
            }
        let ow=document.getElementsByClassName("overwatch")
          for (let i = 0; i < ow.length; i++) {
              ow[i].style.backgroundColor = "forestgreen";
            }
        let sw=document.getElementsByClassName("starwars")
          for (let i = 0; i < sw.length; i++) {
              sw[i].style.backgroundColor = "darkcyan";
            }
        let cod=document.getElementsByClassName("cod")
                for (let i = 0; i < cod.length; i++) {
                    cod[i].style.backgroundColor = "orange";
                  }
        let anime=document.getElementsByClassName("anime")
                  for (let i = 0; i < anime.length; i++) {
                      anime[i].style.backgroundColor = "purple";
                    }
          
    }else{
        eclipse.innerText="Sötét mód";
        let body=document.getElementsByTagName("body");
        body[0].style.backgroundImage = "url('../kepek/trueno.jpg')";
        let div=document.getElementsByTagName("div")
        for (let i = 0; i < div.length; i++) {
            div[i].style.backgroundColor = "rgba(105,105,105,0.8)";
            div[i].style.color = "black";
          }
        let f1=document.getElementsByClassName("f1")
        for (let i = 0; i < f1.length; i++) {
            f1[i].style.backgroundColor = "crimson";
          }
        let duo=document.getElementsByClassName("duolingo")
          for (let i = 0; i < duo.length; i++) {
              duo[i].style.backgroundColor = "yellowgreen";
            }
        let ow=document.getElementsByClassName("overwatch")
            for (let i = 0; i < ow.length; i++) {
                ow[i].style.backgroundColor = "greenyellow";
              }
        let sw=document.getElementsByClassName("starwars")
              for (let i = 0; i < sw.length; i++) {
                  sw[i].style.backgroundColor = "cyan";
                }
        let cod=document.getElementsByClassName("cod")
                for (let i = 0; i < cod.length; i++) {
                    cod[i].style.backgroundColor = "yellow";
                  }
        let anime=document.getElementsByClassName("anime")
                  for (let i = 0; i < anime.length; i++) {
                      anime[i].style.backgroundColor = "#ff00c8";
                    }
        document.getElementById("phasmo").style.backgroundColor="darkgrey"
      
    }
}
