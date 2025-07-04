import React, { useEffect, useState } from "react";
import logo from "../assets/images/icon.png";
import "./Main.css";

function Main(props) {
  const data = props.data;

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState(data.inputPlaceholder);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === "") {
      setPlaceholder("Please, add tasks");
      return;
    } else {
      const newTask = { text: inputValue, checked: false };
      setTasks([...tasks, newTask]);
      setInputValue("");
      setPlaceholder(data.inputPlaceholder);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (index === i) {
        return { ...task, checked: !task.checked };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => {
      return i !== index;
    });

    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container">
        <div className="todo-app">
          <h2>
            {data.title} <img src={logo} alt="logo-title" />
          </h2>
          <div className="row">
            <input
              type="text"
              value={inputValue}
              placeholder={placeholder}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTask}>{data.textButton}</button>
          </div>
          <ul className="list-container">
            {tasks.map((task, index) => {
              return (
                <li
                  key={index}
                  onClick={() => toggleTask(index)}
                  className={task.checked ? "checked" : ""}
                >
                  {task.text}
                  <span
                    className="delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTask(index);
                    }}
                  >
                    {data.trashIcon}
                  </span>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
