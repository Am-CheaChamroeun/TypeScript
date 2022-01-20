export{}

interface Teacher {
    id : number;
    name: string;
    age : number;
    department: string;
}

function displayTeacher(teacher: Teacher) {

    console.log(teacher);

}

let teacher:Teacher = {
    id: 387,
    name: "Mikey",
    age: 18,
    department: "Software Engineering"
}

displayTeacher(teacher)