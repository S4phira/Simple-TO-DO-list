import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, addNewItem] = useState([]);

  function addItem(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addToList() {
    addNewItem(prevsItem => {
      return [...prevsItem, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    addNewItem(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addItem} type="text" value={inputText} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
