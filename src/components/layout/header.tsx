"use client";
import useHash from "@/hooks/use-hash";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusiness,
  FolderKanban,
  Home,
  LucideSend,
  User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const navItems = [
  {
    id: 1,
    name: "Home.tsx",
    path: "#home",
    icon: Home,
  },
  {
    id: 2,
    name: "About.tsx",
    path: "#about",
    icon: User,
  },
  {
    id: 3,
    name: "Experience.tsx",
    path: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    name: "Projects.tsx",
    path: "#projects",
    icon: FolderKanban,
  },
  {
    id: 5,
    name: "Contact.tsx",
    path: "#contact",
    icon: LucideSend,
    isRight: true,
  },
];

export default function Header() {
  const { hash, updateHash } = useHash();

  return (
    <div className="w-full h-12 border-b bg-muted flex items-center overflow-x-auto">
      <div className="w-14 flex items-center justify-center flex-shrink-0 border-r bg-background/40">
        <Image
          src="/favicon.png"
          alt="Ashiqur Rahman"
          width={40}
          height={40}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex items-center size-full">
        {navItems.map((item, index) => {
          const isActive =
            item.path === hash || (item.path === "#home" && hash === "");
          return (
            <Link
              key={item.id}
              href={item.path}
              scroll={false}
              className={cn(
                "relative h-full w-fit min-w-12 sm:min-w-16 md:min-w-32 border-r flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:bg-background px-4",
                isActive && "text-foreground bg-background hover:bg-background",
                index === 0 && "border-l",
                item.isRight && "ml-auto",
              )}
              onClick={(event) => {
                event.preventDefault();
                const targetId = item.path.replace("#", "");
                updateHash(targetId);
                const section = document.getElementById(targetId);
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              <item.icon size={18} className="text-primary-foreground" />
              <span className="hidden md:inline">{item.name}</span>{" "}
              {isActive && <BorderActive />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const BorderActive = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary/40" />
  </>
);
