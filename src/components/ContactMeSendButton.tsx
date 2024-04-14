"use client";
import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export const ContactMeSendButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="flex gap-2" type="submit" disabled={pending}>
      Send <Send className="w-4" />
    </Button>
  );
};
