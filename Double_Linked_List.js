function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

//Adding Head Node

LinkedList.prototype.addToHead = function(value){
 var newNode=new Node(value,this.head,null); //creating new node
 if(this.head) this.head.prev=newNode; //If head is present add new node to head.prev
 else this.tail=newNode; //else add new node to head because no head means no node in linked list
 this.head = newNode; //No matter head is present or not we need to add newNode as head
};

//Adding Tail Node

LinkedList.prototype.addToTail = function(value){
 var newNode = new Node(value,null,this.head); //Creating new node
 if(this.tail) this.tail.next = newNode; //If tail is present add new node to tail.next
 else this.head = newNode; //else add new node to head because no tail means no node in linked list
 this.tail=newNode; //No matter tail is present or not we need to add new node as tail
};

//Removing Head Node

LinkedList.prototype.removeHead = function(){
 if(!this.head) return null; //No head means empty list
 var val = this.head.value; //Just storing head value
 this.head=this.head.next; //Move head to head.next
 if(this.head) this.head.prev=null; //If head is present (means head.next) remove head.prev value
 else this.tail=null; //No head means no tail (empty list)
 return val;
};

//Removing Tail Node

LinkedList.prototype.removeTail = function(){
 if(!this.tail) return null; //No tail means empty list
 var val = this.tail.value; //Just storing tail value
 this.tail = this.tail.prev; //Move tail to tail.prev
 if(this.tail) this.tail.next = null; //If tail is present (means tail.prev) remove tail.next value
 else this.head=null; //No tail means no head (empty list)
 return val;
};

//Searching

LinkedList.prototype.search = function(searchValue){
 var currentNode = this.head;
 while(currentNode){
   if(currentNode.value == searchValue) return currentNode.value;
   currentNode = currentNode.next;
 }
};

var ll = new LinkedList();

//Add Head
// ll.addToHead(50);
// ll.addToHead(200);
// ll.addToHead(300);
// ll.addToHead(400);

// console.log(ll);

//remove Head
//ll.addToHead(100);
//ll.addToHead(200);
ll.removeHead();
console.log(ll);
