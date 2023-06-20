//Given an integer n, return a counter founction. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called(n, n+1, n+2, etc)

//Example 1:
//input: n = 10
//output = [10,11,12]

const createCounter = (n) => {
    return ++n;
}

class Counter {
    constructor(n){
        this.n = n;
    }

    increment() {
        return ++this.n;
    }
}

const counter = new Counter(10);
console.log(counter.increment())
console.log(counter.increment())

console.log(createCounter(10))