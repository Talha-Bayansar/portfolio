import { LayoutGrid, Mail, UserRound, type LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <nav className="hidden md:flex md:flex-col md:gap-4 p-8 text-sm font-medium border">
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
      className="flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary text-nowrap"
    >
      <Icon className="h-4 w-4" />
      {title}
    </Link>
  );
};
