import { cn } from "@/lib/utils";

interface ListCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ListCard({ title, children, className }: ListCardProps) {
  return (
    <div
      className={cn(
        "p-5 rounded-xl border border-border bg-card/85 shadow-[0_0_18px_hsl(0_0%_0%/0.75)]",
        className
      )}
    >
      <h3 className="font-display text-sm tracking-[0.18em] uppercase text-accent-cyan mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}
