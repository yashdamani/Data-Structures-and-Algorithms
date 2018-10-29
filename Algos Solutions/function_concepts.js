function value(a,b) {
	console.log("Call by value : " + a + " " + b);
}

let c= 10;
let d= 20;

value(c,d);

function reference(f) {
	console.log("Call by reference : " + f.name);

}

var ref = [1, 2, {name: "hey"}];
let x = ref[2];

reference(x);

(function selfInvoke() {
	console.log("I am self invoked.");
}());

