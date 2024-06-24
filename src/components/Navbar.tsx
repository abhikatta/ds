import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ flexDirection: "row" }}>
      <Link to={"/linkedlist"}>Linked List</Link>
      <Link to={"/doublylinkedlist"}>Doubly Linked List</Link>
    </div>
  );
};
