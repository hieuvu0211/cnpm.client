import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Users from "./pages/Users";
import Update from "./pages/Update";
import ShowUser from "./pages/ShowUser";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/detail/:id" element={<ShowUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
