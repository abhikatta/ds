import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import LinkedListComponent from "./DS/SinglyLinkedList/LinkedListUI";
import DoublyLinkedListUI from "./DS/DoublyLinkedList/DoublyLinkedListUI";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route element={<LinkedListComponent />} path="/linkedlist"></Route>
        <Route
          element={<DoublyLinkedListUI />}
          path="/doublylinkedlist"></Route>
      </Routes>
    </Router>
  );
};

export default App;
