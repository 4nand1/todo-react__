"use client";

import { useState } from "react";
import React from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSave = () => {
    if (task.trim() === "") return; 
    setTasks((prev) => [...prev, task]);
     setTask("");
  };
  return (
    <div className="flex flex-col w-[300px] gap-3 m-auto mt-60">
      <input
        className="border rounded-md px-4 py-2 border-gray-200"
        placeholder="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >Add Task</button>
      <div className="mt-4 flex flex-col gap-2">
  {tasks.map((t, i) => (
    <div
      key={i}
      className="border border-gray-200 rounded-md px-3 py-2 text-gray-700"
    >
      {t}
    </div>
  ))}
</div>

    </div>
  );
}
