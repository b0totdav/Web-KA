const url = "https://vvri.pythonanywhere.com/api/courses";
const surl = "https://vvri.pythonanywhere.com/api/students";
const ki=document.getElementById("container");
const courseName=document.getElementById("courseName");
let courseId;
const eredmeny=document.getElementById("eredmeny");
const dki=document.getElementById("students");

async function fetchCourses()
{   ki.innerHTML="<th>Kurzus száma</th><th>Kurzus neve</th>";
    try{ 
    const response= await
    fetch(url)
    const data = await response.json()
    if (data)
        data.forEach(element => {
            ki.innerHTML+='<tr class="course"><td>'+element.id+'</td><td>'+element.name+'</td></tr>';
    })
    }catch(error){
        console.log("Hiba történt: " + error)
    }

}


async function createCourse() {
    try{
    const response= await fetch('https://vvri.pythonanywhere.com/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: courseName.value })
    })
    const data=await response.json()
    if(data)
    data.forEach(data => {
        console.log('Course created:', data);
        fetchCourses(); // Refresh the courses list
    })
    }catch(error){console.error('Error creating course:', error)};
}

async function searchCourse() {
    courseId=document.getElementById("courseId").value;
    try{

    const response=await fetch("https://vvri.pythonanywhere.com/api/courses/" + courseId)
        const data=await response.json()
            if (data) {
                console.log(data);
                eredmeny.innerHTML+='<div class="course">Neve: '+data.name+'</div>'
                data.students.forEach(student => {
                    eredmeny.innerHTML+='<div class="students">'+student.name+'</div>'
                });
                } else {
                console.log("Course not found");
            }
    }
    catch(error){console.log("Hiba történt: " + error)}
}

async function showStudents(){
    dki.innerHTML="<th>Diák száma</th><th>Diák neve</th>";
    try{
    const response=await fetch(surl)
    const data= await response.json()
        if (data)
            data.forEach(element => {
                dki.innerHTML+='<tr class="students"><td>'+element.id+'</td><td>'+element.name+'</td></tr>';
        })
    }
    catch(error){console.log("Hiba történt: " + error)}

}
async function addStudentToCourse() {
    studentname = document.getElementById("studentName").value;
    let courseId2 = document.getElementById("courseId2").value;
    try{
    const response=await fetch(surl, {
         
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
    const data=await response.json()
        console.log("New student in course created:", data); // Assuming data is the new course object
        fetchCourses()
        showStudents()
    }
catch(error){console.error("Error creating new course:", error)};
}
async function studentToSearch() {
    let id= document.getElementById("studentId").value;
    let skdi=document.getElementById("studentData");
    try{
    const response=await fetch(surl +'/'+ id)
        const data=await response.json()
            if (data) {
                console.log(data);
                skdi.innerHTML='<div class="students">Száma:'+data.id+"<br>Neve: "+data.name+"</div>";
            } else {
                console.log("Course not found");
            }
    
        }catch(error){console.log("Hiba történt: " + error)}
}