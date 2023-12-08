let keret=document.getElementById("container");

let boss=document.createElement("img");
boss.src="..kepek/projekt2/Bosskicsi.png";
boss.class="elso";

let fixer=document.createElement("img");
fixer.src="..kepek/projekt2/Fixericsi.png";
fixer.class="masodik";

let gregor=document.createElement("img");
gregor.src="..kepek/projekt2/Gregorkicsi.png";
gregor.class="harmadik";

let rex=document.createElement("img");
rex.src="..kepek/projekt2=rexkicsi.png";
rex.class="negyedik";

let scorch=document.createElement("img");
scorch.src="..kepek/projekt2/Scorchkicsi.png";
scorch.class="otodik";

let sev=document.createElement("img");
sev.src="..kepek/projekt2/Sevkicsi.png";
sev.class="hatodik";

let lista={boss,fixer,gregor,rex,scorch,sev};

for (const i in lista) {
    keret.appendChild(i);
}