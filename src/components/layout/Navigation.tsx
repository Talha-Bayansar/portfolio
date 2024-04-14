import { cn } from "@/lib/utils";
import { LayoutGrid, Mail, UserRound, type LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

export const Navigation = () => {
  return (
    <nav className="hidden fixed left-0 top-0 bottom-0 md:flex md:flex-col pt-8 w-52 text-sm font-medium border-r">
      <NavigationItem title="About me" href="#about-me" Icon={UserRound} />
      <NavigationItem title="Projects" href="#projects" Icon={LayoutGrid} />
      <NavigationItem title="Contact me" href="#contact-me" Icon={Mail} />
    </nav>
  );
};

type NavigationItemProps = {
  title: string;
  href: string;
  Icon: LucideIcon;
};

const NavigationItem = ({ title, href, Icon }: NavigationItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "flex items-center justify-start gap-3 px-10"
      )}
    >
      <Icon className="h-4 w-4" />
      {title}
    </Link>
  );
};
