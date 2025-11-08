"use client";

import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import data from "@/data";
import useCurSection from "@/hooks/use-cur-section";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  useCurSection(ref, 0.2);

  const timeline = data.experience.timeline;

  const codeLines = useMemo<CodeLineType[]>(() => {
    const lines: CodeLineType[] = [];

    lines.push({ kind: "comment", text: "// Experience timeline" });
    lines.push({ kind: "const", name: "myExperiences" });

    timeline.forEach((item, index) => {
      if (index !== 0) {
        lines.push({ kind: "blank" });
      }
      lines.push({
        kind: "comment",
        text: `// ${item.period.toUpperCase()} • ${item.type.toUpperCase()}`,
      });
      lines.push({ kind: "objectOpen", indent: 1 });
      lines.push({
        kind: "property",
        indent: 2,
        name: "role",
        value: item.role,
      });
      lines.push({
        kind: "property",
        indent: 2,
        name: "company",
        value: item.company,
      });
      lines.push({
        kind: "property",
        indent: 2,
        name: "location",
        value: item.location,
      });
      if (item.stack && item.stack.length > 0) {
        const stackInline = `[${item.stack.map((tech) => `"${tech}"`).join(", ")}]`;
        lines.push({
          kind: "property",
          indent: 2,
          name: "stack",
          value: stackInline,
          raw: true,
          className: "hidden md:flex",
        });
        lines.push({
          kind: "arrayOpen",
          indent: 2,
          name: "stack",
          className: "md:hidden",
        });
        item.stack.forEach((tech, techIdx) => {
          lines.push({
            kind: "arrayItem",
            indent: 3,
            text: tech,
            trailingComma: techIdx !== item.stack!.length - 1,
            className: "md:hidden",
          });
        });
        lines.push({ kind: "arrayClose", indent: 2, className: "md:hidden" });
      }
      lines.push({ kind: "arrayOpen", indent: 2, name: "highlights" });
      item.highlights.forEach((highlight, idx) => {
        lines.push({
          kind: "arrayItem",
          indent: 3,
          text: highlight,
          trailingComma: idx !== item.highlights.length - 1,
        });
      });
      lines.push({ kind: "arrayClose", indent: 2 });
      lines.push({
        kind: "objectClose",
        indent: 1,
        trailingComma: index !== timeline.length - 1,
      });
    });

    lines.push({ kind: "close", indent: 0 });

    return lines;
  }, [timeline]);

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full container flex flex-col gap-16 py-24"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-gradient-primary">{`{ Experience }`}</span>
        </h2>
      </div>

      <div className="rounded-3xl border border-border/60 bg-card/70 shadow-lg overflow-hidden">
        <div className="grid grid-cols-[auto,1fr]">
          <LineNumbers count={codeLines.length} />
          <div className="font-mono text-xs sm:text-sm bg-background/40 py-6 overflow-x-auto">
            <div className="min-w-[320px] pr-4">
              {codeLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: idx * 0.01 }}
                >
                  <RenderCodeLine line={line} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LineNumbers({ count }: { count: number }) {
  const numbers = useMemo(
    () => Array.from({ length: count }, (_, i) => i + 1),
    [count],
  );
  return (
    <div className="hidden min-w-[4rem] border-r border-border/40 bg-background/30 px-4 py-6 md:flex flex-col text-xs text-muted-foreground/60 font-mono leading-7">
      {numbers.map((num) => (
        <span key={num} className="h-7 block">
          {num.toString().padStart(2, "0")}
        </span>
      ))}
    </div>
  );
}

type CodeLineType =
  | { kind: "blank" }
  | { kind: "comment"; text: string; className?: string }
  | { kind: "const"; name: string; className?: string }
  | { kind: "objectOpen"; indent: number; className?: string }
  | {
      kind: "objectClose";
      indent: number;
      trailingComma?: boolean;
      className?: string;
    }
  | {
      kind: "property";
      indent: number;
      name: string;
      value: string;
      raw?: boolean;
      className?: string;
    }
  | { kind: "arrayOpen"; indent: number; name: string; className?: string }
  | {
      kind: "arrayItem";
      indent: number;
      text: string;
      trailingComma?: boolean;
      className?: string;
    }
  | { kind: "arrayClose"; indent: number; className?: string }
  | { kind: "close"; indent: number; className?: string };

function RenderCodeLine({ line }: { line: CodeLineType }) {
  switch (line.kind) {
    case "blank":
      return <div className="py-1" />;
    case "comment":
      return (
        <div className={cn("leading-7 py-1 text-primary/70", line.className)}>
          <span className="whitespace-pre">{line.text}</span>
        </div>
      );
    case "const":
      return (
        <div className={cn("leading-7 py-1 whitespace-pre", line.className)}>
          <span className="text-secondary">const</span>
          <span className="text-foreground">
            {` ${line.name} = `}
            <span className="text-foreground">[</span>
          </span>
        </div>
      );
    case "objectOpen":
      return (
        <div
          className={cn("leading-7 py-1 whitespace-pre", line.className)}
          style={{ paddingLeft: `${line.indent * 24}px` }}
        >
          <span className="text-foreground">&#123;</span>
        </div>
      );
    case "objectClose":
      return (
        <div
          className={cn("leading-7 py-1 whitespace-pre", line.className)}
          style={{ paddingLeft: `${line.indent * 24}px` }}
        >
          <span className="text-foreground">&#125;</span>
          {line.trailingComma ? (
            <span className="text-foreground">,</span>
          ) : null}
        </div>
      );
    case "property":
      return (
        <div
          className={cn("leading-7 py-1 whitespace-pre", line.className)}
          style={{ paddingLeft: `${line.indent * 24}px` }}
        >
          <span className="text-primary/70">{line.name}</span>
          <span className="text-foreground">: </span>
          <span className="text-foreground">
            {line.raw ? line.value : `"${line.value}"`}
          </span>
          <span className="text-foreground">,</span>
        </div>
      );
    case "arrayOpen":
      return (
        <div
          className={cn("leading-7 py-1 whitespace-pre", line.className)}
          style={{ paddingLeft: `${line.indent * 24}px` }}
        >
          <span className="text-primary/70">{line.name}</span>
          <span className="text-foreground">: [</span>
        </div>
      );
    case "arrayItem":
      return (
        <div
          className={cn(
            "leading-7 py-1 flex items-start gap-2 text-muted-foreground",
            line.className,
          )}
          style={{ paddingLeft: `${line.indent * 24}px` }}
        >
          <span className="text-secondary">▹</span>
          <span className="text-foreground whitespace-pre-wrap">
            &quot;{line.text}
            &quot;
            {line.trailingComma ? (
              <span className="text-foreground">,</span>
            ) : null}
          </span>
        </div>
      );
    case "arrayClose":
      return (
        <div
          className={cn("leading-7 py-1 whitespace-pre", line.className)}
          style={{ paddingLeft: `${line.indent * 24}px` }}
        >
          <span className="text-foreground">],</span>
        </div>
      );
    case "close":
      return (
        <div
          className={cn("leading-7 py-1 whitespace-pre", line.className)}
          style={{ paddingLeft: `${line.indent * 24}px` }}
        >
          <span className="text-foreground">];</span>
        </div>
      );
    default:
      return null;
  }
}
