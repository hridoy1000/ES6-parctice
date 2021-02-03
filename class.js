class Student{

    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Komunessa School";
    }

}


const student1 = new Student(12, "mahi");
const student2 = new Student(23, "tahi");

console.log(student1, student2);