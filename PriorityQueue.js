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
    find(val) { // val 가 존재하면 true을 리턴하는 함수
        this.values.forEach(element => {
            if(element[i][0] == val) return true;
        });
        return false;
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