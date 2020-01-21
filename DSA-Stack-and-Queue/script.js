// Creates a node containing the data and a reference to the next item
// class _Node {
//     constructor(data, next) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//     }
//     push(data) {
//         /* If the stack is empty, then the node will be the
//            top of the stack */
//         if (this.top === null) {
//             this.top = new _Node(data, null);
//             return this.top;
//         }
//         /* If the stack already has something, 
//            then create a new node,
//            add data to the new node, and
//            have the pointer point to the top */
//         const node = new _Node(data, this.top);
//         this.top = node;
//     }
//     pop() {
//         /* In order to remove the top of the stack, you have to point
//            the pointer to the next item and that next item becomes the
//            top of the stack */
//         const node = this.top;
//         this.top = node.next;
//         return node.data;
//     }
// }

// function main() {
//     let starTrek = new Stack();
//     starTrek.push("Kirk")
//     starTrek.push("Spock")
//     starTrek.push("McCoy")
//     starTrek.push("Scotty")
//     return starTrek
// }

// const starTrek = main()

// console.log(starTrek)

function peek(stack) {
    console.log(stack.top.data)
}

// peek(starTrek)

function isEmpty(stack) {
    if (stack.top === null) {
        console.log('empty')
    } else {
        console.log('not empty')
    }
}

// isEmpty(starTrek)

function display(stack) {
    console.log(stack)
    console.log(`The 1st item in the stack is ${stack.top.data}`)
}

// display(starTrek)

function removeMcCoy(stack) {
    const scotty = stack.top.data
    stack.pop()
    stack.pop()
    stack.push(scotty)
    console.log(stack)
}

// removeMcCoy(starTrek)


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    let str1
    let str2
    let pal
    
    if (s.length % 2 === 1) {
        str1 = s.slice(0, s.length/2)
        str2 = s.slice(s.length/2 + 1, s.length).split("").reverse().join("")
    } else {
        str1 = s.slice(0, s.length/2)
        str2 = s.slice(s.length/2, s.length).split("").reverse().join("")
    }
    let stack1 = new Stack();
    let stack2 = new Stack();
    for(let i = 0; i < str1.length; i++) {
        stack1.push(str1[i])
        stack2.push(str2[i])
    }


    while (stack1.top.next !== null) {
        if (stack1.top.data !== stack2.top.data) {
            pal = false
        }
        stack1.pop()
        stack2.pop()
    }
    if (pal === false) {
        console.log('not a palindrome')
    } else {
        console.log('palindrome')
    }
}

// True, true, true, false
// is_palindrome("derad")
// is_palindrome("A man, a plan, a canal: Panama")
// is_palindrome("1001")
// is_palindrome("Tauhida")

// 4. Matching parentheses in an expression

const matchParen = exp => {
    let stack = new Stack();
    console.log(stack.top)
    for(let i = 0; i < exp.length; i++) {
        if(exp[i] === '(') {
            stack.push(exp[i])
        }
        if(exp[i] === ')') {
            if(!stack.top) {
                console.log('Expression is not balanced, missing a "("')
                return
            } else {
                stack.pop()
            }
        }
    }
    if(stack.top) {
        console.log('Expression is not balanced, missing a ")"')
    } else {
        console.log('Expression is balanced')
    }
}

const expression = '((3e4()r5t1qa)))'

// matchParen(expression)



class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }
    dequeue() {
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
            //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function createQueue() {
    let queue = new Queue();
    queue.enqueue('Kirk')
    queue.enqueue('Spock')
    queue.enqueue('Uhura')
    queue.enqueue('Sulu')
    queue.enqueue('Checkov')
    return queue
}

const starTrekQ = createQueue()

console.log(starTrekQ)

const peek2 = q => {
    console.log(q.first.value)
}

peek2(starTrekQ)

const isEmpty2 = q => {
    if(!q.first) {
        console.log('Queue is empty.')
    } else {
        console.log('Not empty')
    }
}

isEmpty2(starTrekQ)

const display2 = q => {
    console.log(q)
}

display2(starTrekQ)

const removeSpock = q => {
    const kirk = q.first.value
    q.dequeue()
    q.dequeue()
    q.enqueue(kirk)
    console.log(q)
}

console.log(starTrekQ)