class A {
	constructor(first, last){
		this.first = first;
		this.last = last;
	}

	test() {
		console.log('hello from class A');
	}
}

class B extends A {
	constructor(first, last, middle){
		super(first, last);

		this.middle = middle;
	}
}

let b = new B('meh','meh2','mehinthemiddle');
console.log(b);
b.test();