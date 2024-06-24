import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        top: 0,
        left: 0,
        width: "100%",
        justifyContent: "center",
        position: "fixed",
        gap: "100px",
      }}>
      <Link to={"/linkedlist"}>Linked List</Link>
      <Link to={"/doublylinkedlist"}>Doubly Linked List</Link>
      <Link to={"/tree"}>Tree</Link>
    </nav>
  );
};
