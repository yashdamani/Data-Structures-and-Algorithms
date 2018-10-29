function Student(name,age,gender,standard){
this.name=name;
this.age=age;
this.gender=gender;
this.standard=standard;
}

function Teacher(name,age,gender,subject){
Student.call(this,name,age,gender);
this.subject=subject;
}

Teacher.prototype = Object.create(Student.prototype);
Teacher.prototype.constructor = Object.create(Person.prototype);


var teacher1 = new Teacher("mark",27,"male","Mathematics");
console.log(teacher1);


