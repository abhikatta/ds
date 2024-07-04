import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LinkedListComponent from "./DS/SinglyLinkedList/LinkedListUI";
import DoublyLinkedListUI from "./DS/DoublyLinkedList/DoublyLinkedListUI";
import { Navbar } from "./components/Navbar";
import TreeUI from "./DS/Tree/TreeUI";
import GraphMatrixUI from "./DS/Graph/GraphArrayUI";
import GraphListUI from "./DS/Graph/GraphListUI";
import BubbleSortUI from "./A/BubbleSort";
import SelectionSortUI from "./A/SelectionSort";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route element={<LinkedListComponent />} path="/linkedlist"></Route>
        <Route
          element={<DoublyLinkedListUI />}
          path="/doublylinkedlist"
        ></Route>
        <Route element={<TreeUI />} path="/tree"></Route>
        <Route element={<GraphMatrixUI />} path="/graphmatrix"></Route>
        <Route element={<GraphMatrixUI />} path="/graphmatrix"></Route>
        <Route element={<GraphListUI />} path="/graphlist"></Route>
        <Route element={<BubbleSortUI />} path="/bubblesort"></Route>
        <Route element={<SelectionSortUI />} path="/selectionsort"></Route>
      </Routes>
    </Router>
  );
};

export default App;
