//https://jsonplaceholder.typicode.com/comments
function Get()
{
    fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "GET"})
    .then(response => response.json())
    .then(json => 
    {
        let li = `<tr><th>Name</th><th>Email</th></tr>`;
        json.forEach(user => 
        {
            li += `<tr>
                <td>${user.name} </td>
                <td>${user.email}</td>        
            </tr>`;
        });
    document.getElementById("users").innerHTML = li;
    });
}

function Post()
{
    fetch("https://jsonplaceholder.typicode.com/comments", {
     
    // Metódus hozzáadása
    method: "POST",
     
    // Küldendő test vagy tartalom hozzáadása
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => response.json())
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));
}