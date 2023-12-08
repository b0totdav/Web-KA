let keret=document.getElementById("container");


function setBoss()
{
    const boss = new Image();
    boss.src = "../kepek/projekt2/Bosskicsi.png";
    keret.appendChild(boss);
}

function setFixer()
{
    const fixer = new Image();
    fixer.src = "../kepek/projekt2/Fixerkicsi.png";
    keret.appendChild(fixer);
}

function setGregor()
{
    const gregor = new Image();
    gregor.src = "../kepek/projekt2/Gregorkicsi.png";
    keret.appendChild(gregor);
}

function setRex()
{
    const rex = new Image();
    rex.src = "../kepek/projekt2/rexkicsi.png";
    keret.appendChild(rex);
}

function setScorch()
{
    const scorch = new Image();
    scorch.src = "../kepek/projekt2/Scorchkicsi.png";
    keret.appendChild(scorch);
}

function setSev()
{
    const sev = new Image();
    sev.src = "../kepek/projekt2/Sevkicsi.png";
    keret.appendChild(sev);
}


let lista={"SetBoss":setBoss(),"SetBoss":setBoss(),"Setsev":setSev(),"SetSev":setSev(),"SetFixer":setFixer(),"SetFixer":setFixer(),"SetScorch":setScorch(),"SetScorch":setScorch(),"SetRex":setRex(),"SetRex":setRex(),"SetGregor":setGregor(),"SetGregor":setGregor()}

for (let index in lista) {
    lista[index];
}
