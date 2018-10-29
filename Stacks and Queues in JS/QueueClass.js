class Queue {
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

	shift(){
		if(this.isEmpty()) {
			return "Cannot delete from an empty Queue";
		}
		else{
			this.items.shift();
			this.size--;
		}
	}

	search(element) {
		if(this.isEmpty()) return "Cannot search in an empty queue";
		else {
			for(let i = 0; i < this.items.length; i++) {
				if(element === this.items[i]){
					return "Element found";
				}
			}return "Element not found";
		} 
	}
}

let obj1 = new Queue(0, []);

obj1.push(100);
obj1.push(200);
obj1.push(300);
obj1.shift();

console.log(obj1.search(200));
console.log(obj1.search(1000));
console.log(obj1.items);