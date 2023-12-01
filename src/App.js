import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  // State variables for managing the todo list and input field
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle adding a new todo to the list
  const handleClick = () => {
    setTodos([...todos, description]);
    setDescription("");
  }

  // Function to handle removing a todo from the list
  const handleRemove = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  // Styles for the main content area
  const contentStyle = {
    textAlign: 'center',
    backgroundColor: '#e0e0e0',
    padding: '20px',
  };

  // Styles for the input field
  const inputStyle = {
    width: '200px',
    padding: '10px',
    margin: '10px 0',
  };

  // Styles for the "Add" button
  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  // Function to get styles for each list item, including hover effects
  const getListItemStyle = (index) => {
    const baseStyle = {
      border: '1px solid #ccc',
      padding: '10px',
      margin: '5px 0',
      display: 'flex',
      justifyContent: 'space-between',
      transition: 'background-color 0.3s, color 0.3s', // Transition for smoother hover effect
    };

    const hoverStyle = {
      backgroundColor: '#b2ebf2', // Background color on hover
      color: '#333', // Text color on hover
    };

    return {
      ...baseStyle,
      ...(index % 2 === 0 ? { backgroundColor: '#f0f0f0' } : { backgroundColor: '#fff' }),
      ...(index === hoveredIndex && hoverStyle), // Apply hover styles if the index matches the hovered index
    };
  };

  // JSX structure for the component
  return (
    <div>
      {/* Navigation bar */}
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="g">Navbar</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="g">About me</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Main content area */}
      <div style={contentStyle}>
        <h1>ToDo List</h1>
        {/* Input field for adding new todos */}
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={inputStyle}
        />
        <br />
        {/* Button to add new todo */}
        <button onClick={handleClick} style={buttonStyle}>Add</button>
        {/* List of todos */}
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={getListItemStyle(index)}>
              {todo}
              {/* Button to remove todo */}
              <button onClick={() => handleRemove(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
