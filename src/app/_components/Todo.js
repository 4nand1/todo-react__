"use client";

import React, { useState } from "react";
import { nanoid } from "nanoid";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";


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
            <Button
              key={tab}
              className="0"
              variant="default"
              size="sm"
              style={{
                backgroundColor:
                  tab === selectedButton ? "blue" : "transparent",
              }}
              onClick={() => {
                setSelectedButton();
              }}
            >
              All
            </Button>
            <Button
              key={tab}
              variant="outline"
              size="sm"
              style={{
                backgroundColor:
                  tab === selectedButton ? "blue" : "transparent",
              }}
            >
              Active
            </Button>
            <Button
              key={tab}
              variant="outline"
              size="sm"
              style={{
                backgroundColor:
                  tab === selectedButton ? "blue" : "transparent",
              }}
            >
              Completed
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            {todos.map((item) => (
              <Card key={item.id}>
                <CardContent className="flex gap-4 items-center">
                  <Checkbox
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
                  <p className="flex-1">{item.text}</p>
                  <Button>Delete</Button>
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
