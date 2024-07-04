import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { NavbarMain, RouteElements } from "./DS/constants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar navElements={NavbarMain} />}></Route>
        {RouteElements.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={<item.component />}
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
