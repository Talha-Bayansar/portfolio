import React from "react";

type Props = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Section = ({ id, title, children, ...props }: Props) => {
  return (
    <section id={id}>
      <h2 className="text-2xl mb-4 font-bold">{title}</h2>
      <div {...props}>{children}</div>
    </section>
  );
};
