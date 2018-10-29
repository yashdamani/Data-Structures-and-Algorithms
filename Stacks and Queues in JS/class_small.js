class A {
constructor(name,age,gender){
this.name=name;
this.age=age;
this.gender=gender;
}
}

class B extends A{
constructor(name,age,gender,subject){

super(name,age,gender);

this.subject=subject;
}
}

class C extends A{
constructor(name,age,gender,standard){
super (name,age,gender);

this.standard=standard;
}
}

let b = new B('paul',35,'Male','English');
let c = new C('Mark',12,'Make','VI');

console.log(b);
console.log(c);
