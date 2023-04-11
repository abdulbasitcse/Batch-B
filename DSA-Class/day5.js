// program to implement queue data structure
// Queue class
class Queue {

    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }

     // check if the queue is empty
     isEmpty(){
        // return true if the queue is empty.
        return this.items.length == 0;
     }
 
    // add element to the queue
    enqueue(element) {
        
        this.items.push(element);
        console.log(element + " enqueued to queue");
    }
    
    // remove element from the queue
    dequeue() {
        // returns underflow when called
		// on empty queue
		if(this.isEmpty())
            return console.log("Queue Underflow");
        return this.items.shift();     
    }
    
          
    // view the first element
    front()
	{
		// returns the Front element of
		// the queue without removing it.
		if(this.isEmpty())
			return "No elements in Queue";
		return this.items[0];
	}

    // view the last element
	rear()
	{
		// returns the Rear element of
		// the queue without removing it.
		if(this.isEmpty())
			return "No elements in Queue";
		return this.items[this.items.length-1];
	}
   
    // the size of the queue
    size(){
        return this.items.length;
    }
 
    // empty the queue
    clear(){
        this.items = [];
    }
    rev(){
        return this.items.reverse();
    }
}

// creating object for queue class
let queue = new Queue();

console.log("Queue is Empty :" + queue.isEmpty());

queue.dequeue()

// Adding elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

// queue contains [10, 20, 30, 40]
console.log(queue.items);

//console.log(queue.rev());

// removes 10
console.log(queue.dequeue() + " dequeued from queue");

// queue contains [20, 30, 40]
// Front is now 20
console.log("Front item is " + queue.front());

// printing the rear element
// Rear is 40
console.log("Rear item is " + queue.rear());

console.log("Queue is Empty :" + queue.isEmpty());

console.log("Size of the Queue : " + queue.size());

console.log("Elements present in Queue : " + queue.items);

queue.clear();
console.log("Elements present in Queue : " + queue.items);