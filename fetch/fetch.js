function fetchUserById(id){

    fetch('https://jsonplaceholder.org/users/?id='+id)
        .then(response => {
            if (!response.ok)
            {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(user => {
            console.log(user);
            ShowUserData(user);

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    }
let azonosito=document.getElementById("azonosito").value;
let e=document.getElementById("ki").innerHTML;
//Komzolos kiiras:     
/*function ShowUserData(user)
{
    console.log(user.id);
    console.log(user.firstname);
    console.log(user.lastname);
    console.log(user.phone);
    console.log(user.email);
    console.log(user.address.street);
    console.log(user.address.suite);
    console.log(user.address.city);
    console.log(user.address.zipcode);
    console.log(user.address.geo.lat);
    console.log(user.address.geo.lng);
    console.log(user.website);
    console.log(user.company.name);
    console.log(user.company.catchPhrase);
    console.log(user.company.bs);

}*/

function ShowUserData(user)
{
    e+="Azonosítószám: "+user.id+"\n";
    e+="Keresztnév: "+user.firstname+"\n";
    e+="Családnév: "+user.lastname+"\n";
    e+="Telefonszám: "+user.phone+"\n";
    e+="Email cím: "+user.email+"\n";
    e+="Lakcím: \n utca:"+user.address.street+"\n házszám: "+user.address.suite+"\n város: "+user.address.city+"\n irányítószám: "+user.address.zipcode+"\n ";
    e+="GPS kordináták: "+user.address.geo.lat+user.address.geo.lng+"\n";
    console.log(user.website);
    console.log(user.company.name);
    console.log(user.company.catchPhrase);
    console.log(user.company.bs);

}
fetchUserById(1);