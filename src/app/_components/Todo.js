"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";
import { nanoid } from "nanoid";


export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [selectedButton, setSelectedButton] = useState("All");

  const tabs = ["All", "Active", "Completed"];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-[380px] shadow-md border border-gray-200">
        <CardHeader className="text-center">
          <CardTitle className="text-lg font-bold">To-Do list</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-2">
          <Input
            className=""
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Add a new task..."
          />
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white "
            onClick={() => {
              setTodos([
                ...todos,
                {
                  id: nanoid(),
                  isDone: false,
                  text: value,
                },
              ]);
              setValue("");
            }}
          >
            Add
          </Button>
        </CardContent>

        <CardFooter
          className="flex flex-col gap-4"
          placeholder="No tasks yet Add one above "
        >
          <div className="flex justify-center gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant="outline"
                className={`h-8 max-w-[378px] px-3 text-xs  transition-all duration-300 ease-in-out ${
                  selectedButton === tab
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : " text-black  "
                }`}
                onClick={() => setSelectedButton(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mx-4 w-full">
            {todos
              .filter((item) => {
                if (selectedButton === "All") return true;
                if (selectedButton === "Completed") return item.isDone === true;
                return item.isDone === false;
              })
              .map((item) => (
                <Card className="rounded-md" key={item.id}>
                  <CardContent className="flex items-center h-12 px-3 gap-3">
                    <Checkbox
                      className="data-[state=checked]:bg-blue-500"
                      checked={item.isDone}
                      onClick={() => {
                        const newTodos = todos.map((todo) => {
                          if (todo.id !== item.id) return todo;
                          return {
                            isDone: !item.isDone,
                            text: item.text,
                            id: item.id,
                          };
                        });
                        setTodos(newTodos);
                      }}
                    />
                    <p
                      className={`w-full flex-1 ${
                        item.isDone ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {item.text}
                    </p>
                    <Button
                      className="bg-red-200  hover:bg-red-300 text-red-500"
                      onClick={() => {
                        const newTodos = todos.filter(
                          (todo) => todo.id !== item.id
                        );
                        setTodos(newTodos);
                      }}
                    >
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div
            className="text-center text-sm text-gray-500 border-t pt-2 "
            placeholder="No tasks yet Add one above "
          >
            {todos.length === 0 && (
              <p className="text-center text-sm text-gray-500 ">
                No tasks yet. Add one above!
              </p>
            )}
          </div>

          {todos.length > 0 && (
            <div className="flex justify-between items-center w-full text-xs text-gray-500">
              <span>
                {todos.filter((todo) => todo.isDone).length} of {todos.length}{" "}
                tasks completed
              </span>

              <button
                className="text-red-500 hover:underline text-[16px] "
                onClick={() => setTodos(todos.filter((todo) => !todo.isDone))}
              >
                Clear completed
              </button>
            </div>
          )}
          <div className=" flex gap-1">
            <p className="text-xs text-gray-400 text-center ">Powered by</p>
            <p className="text-xs text-blue-400">Pinecone academy</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
