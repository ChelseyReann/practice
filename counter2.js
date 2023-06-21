//Write a function createCounter. It should accept an intial integer init. It should return an object with three functions.
//The three functions are:
//increment() increases the current value by 1 and then returns it.
//decrement() reduces the current value by 1 and then returns it.
//reset() sets the current value to init and then returns it

//Example:
//input: init = 5
//output: [6,5,4]

const createCounter = (init) => {
    let count = init

    function increment() {
        return ++count
    }

    function decrement() {
        return --count
    }

    function reset(){
        count = init
        return count
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
}

class Counter{
    constructor(init){
        this.init = init;
        this.count = init;
        this.original = init;
    }

    increment(){
        return ++this.count;
    }

    decrement(){
        return --this.init;
    }

    reset(){
        return this.original;
    }
}

const counter = new Counter(5);
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())

console.log(createCounter(5))