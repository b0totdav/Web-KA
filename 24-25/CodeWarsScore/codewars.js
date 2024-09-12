async function searchUser() {
    userName=document.getElementById("userName").value;
    try{

    const response=await fetch("https://www.codewars.com/api/v1/users/" + userName)
        const data=await response.json()
            if (data) {
                /*let nyelvek = [];
                 i = -1;

                 while (++i < data.languages.length) {
                    nyelvek[i] = data.languages[i];
                }*/
                console.log(data);
                eredmeny.innerHTML+='<div class="user">Neve: '+data.name+'</div>'
                /*nyelvek.array.forEach(element => {
                    eredmeny.innerHTML+='<div class="languages">'+element+'</div>'
                });
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