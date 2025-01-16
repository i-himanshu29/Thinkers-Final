import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
// import { Link } from "react-router-dom";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
// import { Link } from "react-router-dom";

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ihimanshu29/",
    },
    {
      title: "Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/ihimanshu.29/",
    },
    {
      title: "Twitter",
      icon: (
        <FaXTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.x.com/ihimanshu29/",
    },
    {
      title: "Discord",
      icon: (
        <FaDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discord.com/",
    },
  ];

  return (
    <div className="flex items-center justify-center h-20 w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
