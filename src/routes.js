import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/todo/:id" component={Todo} />
    </Routes>
  );
};

export default AppRoutes;
