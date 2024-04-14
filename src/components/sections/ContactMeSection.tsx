import React from "react";
import { Section } from "../layout/Section";
import { ContactMeForm } from "../ContactMeForm";

export const ContactMeSection = () => {
  return (
    <Section id="contact-me" title="Contact me">
      <ContactMeForm />
    </Section>
  );
};
