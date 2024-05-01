const url = "https://vvri.pythonanywhere.com/api/courses";
const surl = "https://vvri.pythonanywhere.com/api/students";
const ki=document.getElementById("container");
const courseName=document.getElementById("courseName");
let courseId;
const eredmeny=document.getElementById("eredmeny");
const dki=document.getElementById("students");

function fetchCourses()
{
    ki.innerHTML="<th>Kurzus száma</th><th>Kurzus neve</th>";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data)
            data.forEach(element => {
                console.log(element)
                ki.innerHTML+='<tr class="course"><td>'+element.id+'</td><td>'+element.name+'</td></tr>';
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

function searchCourse() {
    courseId=document.getElementById("courseId").value;
    fetch("https://vvri.pythonanywhere.com/api/courses/" + courseId)
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log(data);
                eredmeny.innerHTML+='Neve: '+data.name
                data.students.forEach(student => {
                    eredmeny.innerHTML+='\t\t\t<div class="students">'+student.name+'</div>'
                });
                } else {
                console.log("Course not found");
            }
    })
.catch(error => console.log("Hiba történt: " + error))
}

function showStudents(){
    dki.innerHTML="<th>Diák száma</th><th>Diák neve</th>";
    fetch(surl)
    .then(response => response.json())
    .then(data => {
        if (data)
            data.forEach(element => {
                console.log(element)
                dki.innerHTML+='<tr class="students"><td>'+element.id+'</td><td>'+element.name+'</td></tr>';
        })
    })
    .catch(error => console.log("Hiba történt: " + error))

}
function addStudentToCourse() {
    studentname = document.getElementById("studentName").value;
    let courseId2 = document.getElementById("courseId2").value;
    fetch(surl, {
         
        // Metódus hozzáadása
        method: "POST",
         
        // Küldendő test vagy tartalom hozzáadása
        body: JSON.stringify({
            name: studentname,
            course_id: courseId2
            
        }),
         
        // Fejlécek hozzáadása a kéréshez
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("New student in course created:", data); // Assuming data is the new course object
        fetchCourses()
        showStudents()
    })
    .catch(error => console.error("Error creating new course:", error));
}
function studentToSearch() {
    let id= document.getElementById("studentId").value;
    let skdi=document.getElementById("studentData");
    fetch(surl +'/'+ id)
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log(data);
                skdi.innerHTML="Száma:"+data.id+"<br>Neve: "+data.name;
            } else {
                console.log("Course not found");
            }
    })
.catch(error => console.log("Hiba történt: " + error))
}