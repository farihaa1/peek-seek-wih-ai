import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Root from "./Layouts/Root";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}>
        
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
