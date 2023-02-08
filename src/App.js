import "./App.css";
import { CreateEmployee, EmployeeList } from "./components/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees-list" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

export default App;
