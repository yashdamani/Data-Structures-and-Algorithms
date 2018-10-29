function Queue() {
	this.size = 0;
	this.items = [];
}

Queue.prototype.push = function(element) {
	this.items.push(element);
	this.size++;
};

Queue.prototype.isEmpty = function() {
	return this.size === 0;
};

Queue.prototype.shift = function() {
	if(this.isEmpty()) {
		return "Cannot pop from an empty queue";
	}
	else{
		this.items.shift();
		this.size--;
	}
};

Queue.prototype.search = function(element) {
	if(this.isEmpty()) return "Cannot search in an empty queue";
	else {
		for(let i = 0; i < this.items.length; i++) {
			if(element === this.items[i]){
				return "Element found";
			}
		}return "Element not found";
	} 
};

let obj1 = new Queue();

obj1.push(100);
obj1.push(200);
obj1.push(300);
obj1.shift();

console.log(obj1.search(200));
console.log(obj1.search(1000));
console.log(obj1.items);