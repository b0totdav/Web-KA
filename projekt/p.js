const url = "https://vvri.pythonanywhere.com/api/courses";
const ki=document.getElementById("container");

function fetchCourses()
{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data)
            data.forEach(element => {
                console.log(element)
                ki.innerHTML+='<div class="course">'+element.name+"</div>"
        })
    })
    .catch(error => console.log("Hiba történt: " + error))

}


function createCourse(name) {
    fetch('https://vvri.pythonanywhere.com/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Course created:', data);
        fetchCourses(); // Refresh the courses list
    })
    .catch(error => console.error('Error creating course:', error));
}

