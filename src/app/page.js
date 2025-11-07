"use client";

import { useState } from "react";
import React from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSave = () => {
    setTasks((prev) => [...prev, task]);
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
      ></button>
    </div>
  );
}
