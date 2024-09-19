async function searchUser() {
    userName=document.getElementById("userName").value;
    eredmeny.innerHTML="";
    try{

    const response=await fetch("https://www.codewars.com/api/v1/users/" + userName)
        const data=await response.json()
            if (data) {
                console.log(data);
                eredmeny.innerHTML+='<div class="user"><b>Neve:</b> '+data.name+'</div>'
                eredmeny.innerHTML+='<div class="rank"><b>Összesítve:</b><br> <b>Rangja:</b> '+data.ranks.overall.name+'<br> <b>Színe:</b> '+data.ranks.overall.color+'<br> <b>Pontszáma:</b> '+data.ranks.overall.score+'</div>';
                let uLanguages=data.ranks.languages;
                eredmeny.innerHTML+='<div class="nyelvek"><b>Nyelv szerint:</b> <ol>';
                for(let [key, value] of Object.entries(uLanguages))
                {
                    eredmeny.innerHTML+="<li><b>Nyelv:</b> "+key+"<br>&nbsp &nbsp; <b>Pontszám:</b> "+value.score+"</li>";
                }
                eredmeny.innerHTML+="</ol> </div>";
            }else {
                console.log("User not found");
            }
    }
    catch(error){console.log("Hiba történt: " + error)}
}