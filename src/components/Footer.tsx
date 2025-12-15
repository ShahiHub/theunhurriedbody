export function Footer() {
  return (
    <footer className="mt-16 py-6 px-7 border-t border-border bg-[radial-gradient(circle_at_top,hsl(237_100%_50%/0.07),hsl(0_0%_0%/0.96))]">
      <div className="max-w-[960px] mx-auto text-xs tracking-[0.16em] uppercase text-muted-foreground/78 flex flex-wrap gap-y-2 gap-x-7 justify-between">
        <span>Justin Nelson • Alexander Technique</span>
        <span>© {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  );
}
