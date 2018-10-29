class Person {
constructor(name,age,gender){
this.name=name;
this.age=age;
this.gender=gender;
}
}

class Teacher extends Person{
constructor(name,age,gender,subject){

super(name,age,gender);

this.subject=subject;
}
}

class Student extends Person{
constructor(name,age,gender,standard){
super (name,age,gender);

this.standard=standard;
}
}

let teacher1 = new Teacher('paul',35,'Male','English');
let student1 = new Student('Mark',12,'Make','VI');

console.log(teacher1);
console.log(student1);
