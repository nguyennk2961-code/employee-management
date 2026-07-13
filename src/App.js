import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
function App() {
  const [employees, setEmployees] = useState([]);
  const addEmployee = (name) => {
    if (name !== "") {
      setEmployees([...employees, name]);
    }
  };
  return (
    <div>
      <h1>Quản lý nhân viên</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
      <h3>Tổng số nhân viên: {employees.length}</h3>
    </div>
  );
}
export default App;