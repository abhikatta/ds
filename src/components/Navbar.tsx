import { Link } from "react-router-dom";
import { NavbarMain } from "../DS/constants";

export const Navbar = ({
  navElements = NavbarMain,
}: {
  navElements: string[];
}) => {
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
      }}
    >
      {navElements.map((item, index) => {
        return (
          <Link key={index} to={`/${item}`}>
            {item}
          </Link>
        );
      })}
    </nav>
  );
};
