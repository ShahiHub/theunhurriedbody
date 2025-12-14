import { Button } from "@/components/ui/button";
import { ScrollHint } from "@/components/ScrollHint";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="section-snap flex items-center justify-center px-[min(10vw,5rem)] pt-24 pb-16 relative"
    >
      <div className="w-full max-w-[1120px] grid grid-cols-1 lg:grid-cols-[2.3fr_1.05fr] items-center gap-6">
        {/* Hero Media */}
        <div className="relative max-w-[min(1150px,84vw)] justify-self-center rounded-3xl overflow-hidden z-0">
          <div className="absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle_at_center,transparent_55%,hsl(0_0%_0%)_100%)] blur-[18px] -z-10" />
          <div className="relative w-full aspect-video bg-gradient-to-br from-background via-card to-background rounded-3xl flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-[0.18em] uppercase text-foreground mb-2">
                <span className="text-accent-cyan text-glow-cyan">Justin</span>{" "}
                <span className="text-accent-pink text-glow-pink">Nelson</span>
              </h1>
              <p className="font-display text-lg md:text-xl tracking-[0.28em] uppercase text-muted-foreground">
                Alexander Technique
              </p>
            </div>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="max-w-[480px] justify-self-center lg:justify-self-start text-center lg:text-left">
          <p className="font-display text-base md:text-lg leading-relaxed text-soft italic max-w-[34rem] mb-6">
            "A calm, focused welcome into Justin's Alexander Technique work. One-to-one and small-group lessons
            that help you notice how you move, let go of unnecessary effort, and feel more at ease in your own body."
          </p>

          <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start mt-6">
            <Button variant="neonCyan" size="lg" asChild>
              <a href="#contact">Book an intro lesson</a>
            </Button>
            <Button variant="neonPink" size="lg" asChild>
              <a href="#about">What actually happens?</a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No experience needed • Suitable if you feel "always tense", stuck at a desk, or simply curious.
          </p>
        </div>
      </div>

      <ScrollHint targetId="#expert" />
    </section>
  );
}
