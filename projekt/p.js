const url = "https://vvri.pythonanywhere.com/api/courses";
const ki=document.getElementById("container");
const courseName=document.getElementById("courseName");

function fetchCourses()
{
    ki.innerHTML="";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data)
            data.forEach(element => {
                console.log(element)
                ki.innerHTML+='<div class="course">'+element.name+'</div>';
        })
    })
    .catch(error => console.log("Hiba történt: " + error))

}


function createCourse() {
    fetch('https://vvri.pythonanywhere.com/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: courseName.value })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Course created:', data);
        fetchCourses(); // Refresh the courses list
    })
    .catch(error => console.error('Error creating course:', error));
}

function deleteStudent(){

    fetch(url, {

        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
})
    .then(response => {
    if (response.ok) {
    return response.json();
}
    throw new Error('Network response was not ok.');
})

    .then(json => {console.log(json);
        fetchCourses();
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
