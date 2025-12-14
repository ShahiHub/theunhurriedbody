import { ListCard } from "@/components/ListCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-snap flex items-center justify-center px-[min(10vw,5rem)] py-16"
    >
      <div className="w-full max-w-[860px] mx-auto">
        <p className="font-display text-xs tracking-[0.24em] uppercase text-muted-foreground mb-3">
          About Justin
        </p>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-accent-pink text-glow-pink mb-5">
          Gentle, clear teaching for everyday life
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 mt-9">
          <div>
            <p className="text-base leading-relaxed text-soft mb-4">
              Justin recently completed his Alexander Technique training and is now building a small, thoughtful practice.
              Lessons are calm and practical: you look together at what you actually do in daily life – how you sit, stand,
              reach, speak, and breathe – and how much effort you're using to get there.
            </p>
            <p className="text-base leading-relaxed text-soft">
              Instead of chasing perfect posture, you'll explore how it feels when you do a little less. With simple guidance,
              your body has space to reorganize itself so movements become easier and more coordinated.
            </p>
          </div>

          <ListCard title="People who tend to benefit">
            <ul className="space-y-2 text-soft/90 text-sm">
              <li>• Desk workers with tired necks, backs, and shoulders</li>
              <li>• Performers and creatives wanting steadier presence</li>
              <li>• People who feel "always on" and can't quite switch off</li>
              <li>• Anyone curious about kinder, lighter ways of moving</li>
            </ul>
          </ListCard>
        </div>
      </div>
    </section>
  );
}
