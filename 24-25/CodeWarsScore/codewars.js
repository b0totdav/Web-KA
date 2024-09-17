async function searchUser() {
    userName=document.getElementById("userName").value;
    try{

    const response=await fetch("https://www.codewars.com/api/v1/users/" + userName)
        const data=await response.json()
            if (data) {
                console.log(data);
                eredmeny.innerHTML+='<div class="user">Neve: '+data.name+'</div>'
                eredmeny.innerHTML+='<div class="rank">Összesítve: Rangja: '+data.ranks.overall.name+'\n Színe: '+data.ranks.overall.color+'\n Pontszáma: '+data.ranks.overall.score+'</div>';
                let uLanguages=data.ranks.languages;
                eredmeny.innerHTML+='<div class="nyelvek"> <ol>';
                for(let [key, value] of Object.entries(uLanguages))
                {
                    eredmeny.innerHTML+="<li>Nyelv: "+key+" Pontszám: "+value.score+"</li>";
                }
                eredmeny.innerHTML+="</ol> </div>";
            }else {
                console.log("User not found");
            }
    }
    catch(error){console.log("Hiba történt: " + error)}
}