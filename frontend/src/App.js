import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return; // Ignore empty
    setTasks([...tasks, task.trim()]);
    setTask("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>TaskTrackr</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleAddTask} style={{ padding: "8px 16px" }}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((t, idx) => (
          <li key={idx} style={{ padding: "6px 0" }}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
