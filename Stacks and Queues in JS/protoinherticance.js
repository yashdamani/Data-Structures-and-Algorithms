

function Teacher() {
	this.subject = 'Computer Science';
}


function Student() {
	this.name = "Prashanth'"; 
}

Student.prototype = new Teacher(); //Student inherits the properties from Teacher

var object1 = new Student();

console.log(object1.subject);
