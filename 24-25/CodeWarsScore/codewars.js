async function searchUser() {
    userName=document.getElementById("userName").value;
    try{

    const response=await fetch("https://www.codewars.com/api/v1/users/" + userName)
        const data=await response.json()
            if (data) {
                console.log(data);
                eredmeny.innerHTML+='<div class="user">Neve: '+data.name+'</div>'
                /*data.ranks.language.forEach(language => {
                    eredmeny.innerHTML+='<div class="languages">'+language.key+'</div>'
                });*/
                
                eredmeny.innerHTML+='<div class="rank">Összesítve: Rangja: '+data.ranks.overall.name+'\n Színe: '+data.ranks.overall.color+'\n Pontszáma: '+data.ranks.overall.score+'</div>'
            }else {
                console.log("User not found");
            }
    }
    catch(error){console.log("Hiba történt: " + error)}
}