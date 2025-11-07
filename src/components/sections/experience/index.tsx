"use client";

import { motion } from "framer-motion";
import { useMemo, useRef, type ReactNode } from "react";
import data from "@/data";
import useCurSection from "@/hooks/use-cur-section";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  useCurSection(ref, 0.2);

  const timeline = data.experience.timeline;

  const codeLines = useMemo<CodeLineType[]>(() => {
    const lines: CodeLineType[] = [];

    timeline.forEach((item, index) => {
      if (index !== 0) {
        lines.push({ kind: "blank" });
      }

      lines.push({
        kind: "comment",
        text: `// ${item.period.toUpperCase()} • ${item.type.toUpperCase()}`,
      });
      lines.push({ kind: "const", name: `experience${index.toString().padStart(2, "0")}` });
      lines.push({ kind: "property", indent: 1, name: "role", value: item.role });
      lines.push({ kind: "property", indent: 1, name: "company", value: item.company });
      lines.push({ kind: "property", indent: 1, name: "location", value: item.location });
      if (item.stack) {
        const stackString = `[${item.stack.map((tech) => `"${tech}"`).join(", " )}]`;
        lines.push({ kind: "property", indent: 1, name: "stack", value: stackString, raw: true });
      }
      lines.push({ kind: "arrayOpen", indent: 1, name: "highlights" });
      item.highlights.forEach((highlight, idx) => {
        lines.push({
          kind: "arrayItem",
          indent: 2,
          text: highlight,
          trailingComma: idx !== item.highlights.length - 1,
        });
      });
      lines.push({ kind: "arrayClose", indent: 1 });
      lines.push({ kind: "close", indent: 0 });
    });

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
          <div className="font-mono text-sm bg-background/40 py-6">
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
    </section>
  );
}

function LineNumbers({ count }: { count: number }) {
  const numbers = useMemo(() => Array.from({ length: count }, (_, i) => i + 1), [count]);
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
  | { kind: "comment"; text: string }
  | { kind: "const"; name: string }
  | { kind: "property"; indent: number; name: string; value: string; raw?: boolean }
  | { kind: "arrayOpen"; indent: number; name: string }
  | { kind: "arrayItem"; indent: number; text: string; trailingComma?: boolean }
  | { kind: "arrayClose"; indent: number }
  | { kind: "close"; indent: number };

function RenderCodeLine({ line }: { line: CodeLineType }) {
  switch (line.kind) {
    case "blank":
      return <div className="h-7" />;
    case "comment":
      return (
        <div className="h-7 leading-7 text-primary/70">
          <span className="whitespace-pre">{line.text}</span>
        </div>
      );
    case "const":
      return (
        <div className="h-7 leading-7">
          <span className="text-secondary">const</span>
          <span className="text-foreground">
            {` ${line.name} = `}
            <span className="text-foreground">&#123;</span>
          </span>
        </div>
      );
    case "property":
      return (
        <div className="h-7 leading-7" style={{ paddingLeft: `${line.indent * 24}px` }}>
          <span className="text-secondary/90">{line.name}</span>
          <span className="text-foreground">: </span>
          <span className="text-primary/85">
            {line.raw ? line.value : `"${line.value}"`}
          </span>
          <span className="text-foreground">,</span>
        </div>
      );
    case "arrayOpen":
      return (
        <div className="h-7 leading-7" style={{ paddingLeft: `${line.indent * 24}px` }}>
          <span className="text-secondary/90">{line.name}</span>
          <span className="text-foreground">: [</span>
        </div>
      );
    case "arrayItem":
      return (
        <div
          className="h-7 leading-7 flex items-center gap-2 text-muted-foreground"
          style={{ paddingLeft: `${line.indent * 24}px` }}
        >
          <span className="text-secondary">▹</span>
          <span className="text-primary/75">
            &quot;{line.text}
            &quot;
            {line.trailingComma ? <span className="text-foreground">,</span> : null}
          </span>
        </div>
      );
    case "arrayClose":
      return (
        <div className="h-7 leading-7" style={{ paddingLeft: `${line.indent * 24}px` }}>
          <span className="text-foreground">],</span>
        </div>
      );
    case "close":
      return (
        <div className="h-7 leading-7" style={{ paddingLeft: `${line.indent * 24}px` }}>
          <span className="text-foreground">&#125;;</span>
        </div>
      );
    default:
      return null;
  }
}

