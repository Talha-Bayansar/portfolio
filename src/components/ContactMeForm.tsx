import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export const ContactMeForm = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="full-name" className="font-medium text-sm">
          Full name
        </label>
        <Input id="full-name" name="full-name" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium text-sm">
          Email adress
        </label>
        <Input id="email" name="email" type="email" inputMode="email" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-medium text-sm">
          Message
        </label>
        <Textarea id="message" name="message" rows={8} />
      </div>
      <Button className="flex gap-2" type="submit">
        Send <Send className="w-4" />
      </Button>
    </form>
  );
};
