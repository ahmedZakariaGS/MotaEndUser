 import './App.css';
import React from "react";
import CourseList from "./index"; // Adjust the path if needed
function App() {
  return (
    <div className="App">
      <h1 className="header">Available Courses</h1>
      <CourseList />
    </div>
  );
}
export default App;
