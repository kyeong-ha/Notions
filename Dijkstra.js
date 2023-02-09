class PriorityQueue {
    constructor() {
      this.values = [];
    }

    // enqueue(val, priority) {
    //     this.values.push({ val, priority });
    //     this.sort((a, b) => a - b);
    // }

    enqueue(val, priority) {
        let added = false;

        for(let i=0; i<this.values.length; i++){
            if(priority < this.values.priority){
                this.values.splice(i, 0, {val, priority});
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


class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    //   this.adjacencyList[vertex2].push({ node: vertex1, weight }); 무방향 그래프인 경우
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        nodes.enqueue(start, 0); // 출발노드를 큐에 넣는다
    
        const distances = {}; // 각 노드까지의 최단 거리를 저장하는 객체
        const prevDistances = {}; // 각 노드까지 최단 거리 비용이 담긴 DP 객체
    
        const shortestPath = []; // 최종 최단 거리 비용을 담을 객체
        let curNode;
    
        // 거리 비용을 담은 객체 초기화 
        for (const vertex in this.adjacencyList) {
            if (vertex == start) {
                distances[vertex] = 0;
            } else {
                distances[vertex] = Infinity;
            }
            prevDistances[vertex] = null;
        }
        /*
            distances { A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity}
            prevDistances { A: null, B: null, C: null, D: null, E: null, F: null }
        */
    
        while (true) {
            if(nodes.values.length <= 0) break; 
            curNode = nodes.dequeue().val; // 우선정리 큐를 이용하므로 dequeue 로 최소 거리를 얻는다

          // dequeue한 값이 finish와 같으면 목적지에 도착한 것이므로,
    
          if (curNode === finish) { // 현재 가려는 노드가 목적지면,
            while (prevDistances[curNode]) {
                shortestPath.push(curNode); // 최종 목적지에 최소거리를 push한 뒤 break
                curNode = prevDistances[curNode];
            }
            break;
          }
    
          // 현재 가려는 노드가 목적지가 아니면,
          else {
    
            for (const neighbor in this.adjacencyList[curNode]) {
              const nextNode = this.adjacencyList[curNode][neighbor];
              
              const candidate = distances[curNode] + nextNode.weight; // 시작점에서 현재 노드까지 거리 + 현재 노드와 다음 노드 사이의 거리
              const nextNeighbor = nextNode.node; // 현재 노드의 이웃 노드들 
    
              // 기존에 저장된 거리보다 후보로 계산한 새로운 거리값이 더 작으면 업데이트 한다.
              if (candidate < distances[nextNeighbor]) {
                distances[nextNeighbor] = candidate;
     
                prevDistances[nextNeighbor] = curNode;
                nodes.enqueue(nextNeighbor, candidate);
              }
            }
          }
        }
        // return shortestPath.concat(curNode).reverse(); // 목적지 노드까지 가는 노드를 반환
        return distances; // start 노드에서 각 노드까지 가는 최소 비용을 반환
    }
}