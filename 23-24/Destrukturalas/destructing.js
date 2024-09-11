//Feladat 1

let car=["Toyota","GT86",2016,"Red"];
let [brand,model,year,color]=car;
console.log(brand);
console.log(model);
console.log(year);
console.log(color);

// kérdés 1: bármilyet
// kérdés 2: Fontos, ugyan abban a sorrendben kell mint amilyen sorrendben a tömbben vannak

//Feladat 2
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };
let{title,author,publicationYear,language}=book;
console.log(title);
console.log(author);
console.log(publicationYear);
console.log(language);

//kérdés 1: Ugyan annak a névnek kell lennie 
//kérdés 2: nem fontos

//Feladat 3

let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

    function printStudentInfo({ name,age,grade,subjects }) {
        console.log(`${name} ${age} éves jegye:${grade} tantárgyak:${subjects}`);
        }
printStudentInfo(student);
