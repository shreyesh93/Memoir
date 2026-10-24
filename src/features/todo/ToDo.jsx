
import React, { useState, useEffect } from "react";
import "./todo.css";

const ToDo = () => {
  // Load tasks from localStorage when the component initializes
  const [todolist, setTodolist] = useState(() => {
    const savedTasks = localStorage.getItem("todolist");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskname, setTaskName] = useState("");
  const [errors, setErrors] = useState({});

  // Save tasks to localStorage whenever todolist changes
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  function AddTask(task) {
    if (!task.trim()) {
      setErrors({ taskname: "Please enter a task." });
      return;
    }

    setTodolist([
      ...todolist,
      {
        id: crypto.randomUUID(),
        taskName: task.trim(),
        date: new Date().toLocaleDateString(),
        completed: false,
      },
    ]);

    setTaskName("");
    setErrors({});
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setTaskName(value);

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  }

  function deleteTask(id) {
    setTodolist(todolist.filter((item) => item.id !== id));
  }

  function taskCompleted(id) {
    setTodolist(
      todolist.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  return (
    <main className="todo-app">
      <header className="todo-header">
        <p className="todo-eyebrow">YOUR DAILY PLANNER</p>
        <h1 className="todo-title">TODO LIST 📜</h1>
        <p className="todo-subtitle">Small steps, big progress.</p>
      </header>

      <section className="todo-card">
        <div className="todo-form">
          <label htmlFor="taskname" className="todo-label">
            What needs to get done?
          </label>

          <div className="todo-input-row">
            <input
              type="text"
              id="taskname"
              name="taskname"
              className="todo-input"
              placeholder="Enter your task..."
              value={taskname}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") AddTask(taskname);
              }}
            />

            <button
              type="button"
              className="todo-button todo-add-button"
              onClick={() => AddTask(taskname)}
            >
              + Add
            </button>
          </div>

          {errors.taskname && (
            <p className="todo-error" role="alert">
              {errors.taskname}
            </p>
          )}
        </div>

        <div className="todo-list-header">
          <h2>Your tasks</h2>
          <span className="todo-count">
            {todolist.filter((item) => !item.completed).length} pending
          </span>
        </div>

        {todolist.length === 0 ? (
          <div className="todo-empty">
            <span className="todo-empty-icon">✦</span>
            <p>No tasks yet</p>
            <span>Add a task above to get started.</span>
          </div>
        ) : (
          <ol className="todo-list">
            {[...todolist]
              .sort(
                (a, b) =>
                  Number(a.completed) - Number(b.completed)
              )
              .map((item) => (
                <li
                  key={item.id}
                  className={`todo-item ${
                    item.completed ? "todo-item-completed" : ""
                  }`}
                >
                  <div className="todo-task-content">
                    <span className="todo-task-name">
                      {item.taskName}
                    </span>

                    <small className="todo-date">
                      Added on: {item.date}
                    </small>
                  </div>

                  <div className="todo-actions">
                    <button
                      className="todo-button todo-complete-button"
                      onClick={() => taskCompleted(item.id)}
                    >
                      {item.completed ? "Undo" : "Complete"}
                    </button>

                    <button
                      className="todo-button todo-delete-button"
                      onClick={() => deleteTask(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ol>
        )}
      </section>

      <footer className="todo-footer">
        Made for a more organized day.
      </footer>
    </main>
  );
};

export default ToDo;
