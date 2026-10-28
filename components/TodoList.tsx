"use client";

import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Checkbox } from "./ui/checkbox";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   setDate(new Date());
  // }, []);
  return (
    <div>
      <h1 className="text-lg font-medium">TODO List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full my-5">
            <CalendarIcon />
            {date ? format(date, "YYY-MM-dd") : <span> Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      {/* List */}
      <ScrollArea className="max-h-70 overflow-y-scroll">
        <div className="flex flex-col gap-4 px-1">
          <Card className="text-sm text-muted-foreground ">
            <div className="flex items-center gap-4 px-2 ">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="text-sm text-muted-foreground">
            <div className="flex items-center gap-4 px-2 ">
              <Checkbox id="item54" />
              <label htmlFor="item54" className="cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="text-sm text-muted-foreground">
            <div className="flex items-center gap-4 px-2 ">
              <Checkbox id="item23" checked />
              <label htmlFor="item23" className="cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="text-sm text-muted-foreground">
            <div className="flex items-center gap-4 px-2 ">
              <Checkbox id="item3" />
              <label htmlFor="item3" className="cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="text-sm text-muted-foreground">
            <div className="flex items-center gap-4 px-2 ">
              <Checkbox id="item4" />
              <label htmlFor="item4" className="cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="text-sm text-muted-foreground">
            <div className="flex items-center gap-4 px-2 ">
              <Checkbox id="item5" checked />
              <label htmlFor="item5" className="cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="text-sm text-muted-foreground">
            <div className="flex items-center gap-4 px-2 ">
              <Checkbox id="item6" checked />
              <label htmlFor="item6" className="cursor-pointer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
