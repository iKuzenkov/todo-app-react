function TaskList({
  data,
  tasks,
  toggleTask,
  deleteTask,
  changeColor,
  copyTask,
  copiedIndex,
  editTask,
  saveTask,
  setTasks,
}) {
  return (
    <ul className="list-container">
      {tasks.map((task, index) => (
        <li key={index} className={task.checked ? "checked" : ""}>
          <span className="checkbox" onClick={() => toggleTask(index)}></span>

          <div className="task-row">
            <span
              className="task-text"
              style={{
                backgroundColor: task.color || "",
                borderRadius: "6px",
                padding: "4px 8px",
              }}
            >
              {task.text}
            </span>
            <hr />
            <div className="task-actions">
              <span
                className="edit-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  editTask(index);
                }}
              >
                {data.editEmoji}
              </span>

              <div className="copy-container">
                <span
                  className="copy-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyTask(index);
                  }}
                >
                  {data.copyEmoji}
                </span>
                {copiedIndex === index && (
                  <span className="copy-msg">Copied!✅</span>
                )}
              </div>

              <input
                type="color"
                className="change-color"
                defaultValue={task.color || "#ffffff"}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => changeColor(index, e.target.value)}
              />

              <span
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
              >
                {data.trashEmoji}
              </span>
            </div>
          </div>
          {task.isEditing && (
            <input
              type="text"
              value={task.text}
              className="edit-input"
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                const updatedTasks = [...tasks];
                updatedTasks[index].text = e.target.value;
                setTasks(updatedTasks);
              }}
              onBlur={() => saveTask(index, task.text)}
              autoFocus
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
