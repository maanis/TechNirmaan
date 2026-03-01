// Server Component — no interactivity, pure CSS marquee
import {
  Code2, Database, Cloud, Cpu, Terminal, Boxes,
  GitBranch, Globe, Server, Shield, Layers, Command,
} from "lucide-react";

const logos = [
  { icon: Code2, name: "React" },
  { icon: Database, name: "MongoDB" },
  { icon: Cloud, name: "Cloudflare" },
  { icon: Cpu, name: "Node.js" },
  { icon: Terminal, name: "Python" },
  { icon: Boxes, name: "Docker" },
  { icon: GitBranch, name: "Git" },
  { icon: Globe, name: "Next.js" },
  { icon: Server, name: "AWS" },
  { icon: Shield, name: "Auth0" },
  { icon: Layers, name: "Stack" },
  { icon: Command, name: "CLI" },
];

const duplicated = [...logos, ...logos];

export default function LogoStrip() {
  return (
    <div
      className="py-12 border-y dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-950 border-border/20 overflow-hidden"
      aria-label="Technologies we use"
    >
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-12 md:gap-24 w-max animate-marquee">
          {duplicated.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-default flex-shrink-0"
              aria-hidden={i >= logos.length} // second copy is decorative
            >
              <logo.icon className="w-6 h-6" aria-hidden="true" />
              <span className="text-sm font-medium whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
