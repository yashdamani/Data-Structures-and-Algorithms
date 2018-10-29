class Stack {
	constructor(size, items) {
		this.size = size;
		this.items = items;
	}

	push(element){
		this.items.push(element);
		this.size++;
	}

	isEmpty() {
		return this.size === 0;
	}

	pop(){
		if(this.isEmpty()) {
			return "Cannot pop from an empty stack";
		}
		else{
			this.items.pop();
			this.size--;
		}
	}

	search(element) {
		if(this.isEmpty()) return "Cannot search in an empty array";
		else {
			for(let i = 0; i < this.items.length; i++) {
				if(element === this.items[i]){
					return "Element found";
				}
			}return "Element not found";
		} 
	}
}

let obj1 = new Stack(0, []);

obj1.push(100);
obj1.push(200);
obj1.push(300);

console.log(obj1.search(200));
console.log(obj1.search(1000));