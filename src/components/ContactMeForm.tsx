"use client";

import React, { useEffect } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/email";
import { ContactMeSendButton } from "./ContactMeSendButton";
import { useFormState } from "react-dom";

export const ContactMeForm = () => {
  const [state, formAction] = useFormState(sendEmail, null);

  useEffect(() => {
    if (state === true) {
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="font-medium text-sm">
          Full name
        </label>
        <Input id="fullName" name="fullName" />
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
      <ContactMeSendButton />
    </form>
  );
};
