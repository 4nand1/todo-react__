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
          <CardTitle className="text-lg font-semibold">To-Do list</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-2">
          <Input
            className=""
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onChangeplaceholder="Add a new task..."
          />
          <Button
            className="bg-blue-500"
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

        <CardFooter className="flex flex-col gap-4">
          <div className="flex justify-center gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={selectedButton === tab ? "blue" : "outline"}
              size="sm"
              style={{ 
                backgroundColor: tab === selectedButton ? "blue" : "transparent",
              }}
              onClick={() => setSelectedButton(tab)}
            >
              {tab}
            </Button>
          ))}
          </div>

          <div className="flex flex-col gap-4">
            {todos.filter((item) => {
              if (selectedButton === "All") return true;
              if (selectedButton === "Completed") return item.isDone ===true;
              return item.isDone === false;
            }).map((item) => (
              <Card key={item.id}>
                <CardContent className="flex gap-4 items-center">
                  <Checkbox
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
                  <p className=" w-full flex-1">{item.text}</p>
                  <Button className="bg-red-600">Delete</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500">
            No tasks yet. Add one above!
          </p>

          <p className="text-xs text-gray-400 text-center border-t pt-2">
            Powered by Pinecone academy
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
