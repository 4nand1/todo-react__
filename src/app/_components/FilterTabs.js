"use client";

import { Button } from "@/components/ui/button";

export const FilterTabs = ({ selectedButton, setSelectedButton }) => {
  const tabs = ["All", "Active", "Completed"];

  return (
    <div className="flex justify-center gap-2">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={selectedButton === tab ? "blue" : "outline"}
          size="sm"
          onClick={() => setSelectedButton(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};
