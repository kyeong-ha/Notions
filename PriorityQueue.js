class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
        let added = false;

        for(let i=0; i<this.values.length; i++){
            if(priority < this.values[i][1]){
                this.values.splice(i, 0, [val, priority]);
                added = true;
                break;
            }
        }
        if(!added) this.values.push([val, priority]);
    }
    dequeue() {
      return this.values.shift();
    }
}

/*
    선언
    const pq = new PriorityQueue();
    
    데이터 push
    pq.enqueue(node, priority);
    
    데이터 pop
    data = pq.dequeue();
*/