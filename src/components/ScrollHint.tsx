interface ScrollHintProps {
  targetId: string;
}

export function ScrollHint({ targetId }: ScrollHintProps) {
  return (
    <a
      href={targetId}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[0.7rem] tracking-[0.22em] uppercase text-accent-purple/80 flex flex-col items-center gap-1.5 opacity-85 hover:opacity-100 transition-opacity"
    >
      <span>Scroll</span>
      <div className="w-px h-8 rounded-full bg-gradient-to-b from-accent-cyan to-transparent overflow-hidden relative">
        <div className="absolute top-[-40%] left-0 right-0 h-3 rounded-full bg-foreground shadow-[0_0_6px_hsl(var(--accent-cyan)),0_0_10px_hsl(var(--accent-cyan))] animate-scroll-drop" />
      </div>
    </a>
  );
}
