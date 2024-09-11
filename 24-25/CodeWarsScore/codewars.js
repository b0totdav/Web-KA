async function searchUser() {
    userName=document.getElementById("userName").value;
    try{

    const response=await fetch("https://www.codewars.com/api/v1/users/" + userName)
        const data=await response.json()
            if (data) {
                console.log(data);
                eredmeny.innerHTML+='<div class="user">Neve: '+data.name+'</div>'
                data.languages.forEach(language => {
                    eredmeny.innerHTML+='<div class="languages">'+language.name+'</div>'
                });
                } else {
                console.log("User not found");
            }
    }
    catch(error){console.log("Hiba történt: " + error)}
}