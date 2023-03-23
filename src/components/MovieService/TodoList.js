import React, { useState } from "react";
import { Checkbox } from "antd";

const TodoList = () => {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const checkBoxChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To DOs ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write your todo.."
        />
        <button>Add To Do</button>
        <br />
        {toDos.map((item, id) => (
          <div>
            <Checkbox key={id} onChange={checkBoxChange}>
              {item}
            </Checkbox>
          </div>
        ))}
      </form>
    </div>
  );
};

export default TodoList;
