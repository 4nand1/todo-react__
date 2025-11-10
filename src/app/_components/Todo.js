"use client";

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

export const Todo = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-[380px] shadow-md border border-gray-200">
        <CardHeader className="text-center">
          <CardTitle className="text-lg font-semibold">To-Do list</CardTitle>
        </CardHeader>


        <CardContent className="flex gap-2">
          <Input  className="" placeholder="Add a new task..." />
          <Button className="bg-blue-500">Add</Button>
        </CardContent>

      
        <CardFooter className="flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            <Button className="bg-blue-500" variant="default" size="sm">
              All
            </Button>
            <Button variant="outline" size="sm">
              Active
            </Button>
            <Button variant="outline" size="sm">
              Completed
            </Button>
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
