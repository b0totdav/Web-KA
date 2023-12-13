let keret=document.getElementById("container");


function setBoss()
{
    const boss = new Image();
    boss.src = "../kepek/projekt2/Bosskicsi.png";
    boss.setAttribute("class","elso")
    keret.appendChild(boss);
}

function setFixer()
{
    const fixer = new Image();
    fixer.src = "../kepek/projekt2/Fixerkicsi.png";
    fixer.setAttribute("class","masodik")
    keret.appendChild(fixer);
}

function setGregor()
{
    const gregor = new Image();
    gregor.src = "../kepek/projekt2/Gregorkicsi.png";
    gregor.setAttribute("class","harmadik")
    keret.appendChild(gregor);
}

function setRex()
{
    const rex = new Image();
    rex.src = "../kepek/projekt2/rexkicsi.png";
    rex.setAttribute("class","negyedik")
    keret.appendChild(rex);
}

function setScorch()
{
    const scorch = new Image();
    scorch.src = "../kepek/projekt2/Scorchkicsi.png";
    scorch.setAttribute("class","otodik")
    keret.appendChild(scorch);
}

function setSev()
{
    const sev = new Image();
    sev.src = "../kepek/projekt2/Sevkicsi.png";
    sev.setAttribute("class","hatodik")
    keret.appendChild(sev);
}


let lista={"SetBoss":setBoss(),"SetBoss":setBoss(),"Setsev":setSev(),"SetSev":setSev(),"SetFixer":setFixer(),"SetFixer":setFixer(),"SetScorch":setScorch(),"SetScorch":setScorch(),"SetRex":setRex(),"SetRex":setRex(),"SetGregor":setGregor(),"SetGregor":setGregor()}
let randomlista=["","","","","","","","","","","",""];
let lenght=lista.lenght;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
for(var i=0;i<lenght;i++)
{
    let random=getRandomInt(12);
    randomlista[i]=lista[random];
    lista.push(random);
}

for (let index in randomlista) {
    randomlista[index];
}

function sideSwitch(background)
{
    background.style.visibility="visible";
}