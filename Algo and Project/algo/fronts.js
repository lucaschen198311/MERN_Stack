class listNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    addFront(val){
        let newNode = new listNode(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    display(){
        let currNode = this.head;
        while(currNode){
            console.log(`current node is ${currNode.val}`);
            currNode = currNode.next;
        }
    }
    removeFront(){
        if(!this.head) return null;
        let nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        return this;
    }
    front(){
        if(!this.head) return null;
        return this.head.val;
    }
}
let list = new SLL();
list.addFront(1).addFront(2).addFront(3)
console.log(list.display());
console.log(list.removeFront().display());
console.log(list.front());