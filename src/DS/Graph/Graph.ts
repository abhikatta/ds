import { listType } from "./types";

export class GraphMatrix {
  matrix: number[][] = [];
  constructor(numNodes: number) {
    this.matrix = [];
    for (let i = 0; i < numNodes; i++) {
      this.matrix.push(new Array(numNodes).fill(0));
    }
  }
  addEdge(fromNode: number, toNode: number) {
    this.matrix[fromNode - 1][toNode - 1] = 1;
    this.matrix[toNode - 1][fromNode - 1] = 1;
  }
  removeEdge(fromNode: number, toNode: number) {
    this.matrix[fromNode - 1][toNode - 1] = 0;
    this.matrix[toNode - 1][fromNode - 1] = 0;
  }
  isEdge(fromNode: number, toNode: number) {
    return this.matrix[fromNode - 1][toNode - 1] === 1;
  }
  bfs = (rootNode: number) => {
    const queue = [rootNode];
    const visited: boolean[] = new Array(this.matrix.length).fill(false);
    const res: number[] = [];
    // due to indexiing
    visited[rootNode - 1] = true;
    while (queue.length > 0) {
      const node = queue.shift()!;
      res.push(node);
      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[node - 1][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i + 1);
        }
      }
    }
  };

  dfs(rootNode: number) {
    const visited: boolean[] = new Array(this.matrix.length).fill(false);
    const result: number[] = [];

    const dfsHelper = (node: number) => {
      if (!visited[node - 1]) {
        visited[node - 1] = true;
        result.push(node);

        for (let i = 0; i < this.matrix.length; i++) {
          if (this.matrix[node - 1][i] === 1 && !visited[i]) {
            dfsHelper(i + 1);
          }
        }
      }
    };

    dfsHelper(rootNode);
    return result;
  }
}

export class GraphList {
  list: listType = {};
  constructor() {
    this.list = {};
  }
  addNode(node: number) {
    this.list[node] = [];
  }
  addEdge(fromNode: number, toNode: number) {
    if (!this.list[fromNode]) {
      this.list[fromNode] = [];
    }
    this.list[fromNode].push(toNode);
    this.list[toNode] && this.list[toNode].push(fromNode);
  }
  removeEdge(fromNode: number, toNode: number) {
    this.list[fromNode] = this.list[fromNode].filter((node) => node !== toNode);
    this.list[toNode] = this.list[toNode].filter((node) => node !== fromNode);
  }
  isEdge(fromNode: number, toNode: number) {
    return this.list[fromNode].includes(toNode);
  }
  bfs(startNode: number) {
    const queue: number[] = [startNode];
    const visited: { [key: number]: boolean } = {};
    const result: number[] = [];

    visited[startNode] = true;

    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      result.push(currentNode);

      for (const neighbor of this.list[currentNode]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  dfs(startNode: number) {
    const visited: { [key: number]: boolean } = {};
    const result: number[] = [];

    const dfsHelper = (node: number) => {
      if (!visited[node]) {
        visited[node] = true;
        result.push(node);

        for (const neighbor of this.list[node]) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(startNode);
    return result;
  }
}
