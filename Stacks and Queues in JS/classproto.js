class A {
	constructor(age, name, gender) {
		this.age = age;
		this.name = name;
		this.gender = gender;
	}

	hello() {
		console.log("hey i am " + this.name);
	}

	bye() {
		console.log("bye " + this.name);
	}
}

class B extends A{
	constructor(age, name, gender, interest, subject) {
		super(age, name, gender);

		this.interest = interest;
		this.subject = subject;
	}
}

var student = new B("12", "Potter", 20, "Spells", "Magic");
console.log(student);
student.hello();
student.bye();
console.log(student.subject);
