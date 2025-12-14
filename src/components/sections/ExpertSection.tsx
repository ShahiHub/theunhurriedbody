import { ListCard } from "@/components/ListCard";

export function ExpertSection() {
  return (
    <section
      id="expert"
      className="section-snap flex items-center justify-center px-[min(10vw,5rem)] py-16"
    >
      <div className="w-full max-w-[860px] mx-auto">
        <p className="font-display text-xs tracking-[0.24em] uppercase text-muted-foreground mb-3">
          Expert in sitting
        </p>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-accent-pink text-glow-pink mb-5">
          Finding balance in how you sit
        </h2>

        <div className="mt-9 max-w-[960px]">
          <p className="text-base leading-relaxed text-soft mb-4">
            Justin likes to joke that he's an expert in sitting—because like most of us, he's spent a lot of
            life there. The way you sit right now isn't wrong; it's simply the solution your system found to get you
            through long days, deadlines, and screens. In lessons, you start by getting curious about that solution instead of
            fighting it.
          </p>
          <p className="text-base leading-relaxed text-soft mb-4">
            From there, you explore what else might be available—not bolt-upright "perfect posture," but a little
            more support, a bit less gripping, and positions that feel kind and reachable for your real life. You're not
            asked to jump from where you are to some ideal; you're invited to notice, to experiment, and to give your body a few
            more options.
          </p>
          <p className="text-base leading-relaxed text-soft">
            Lessons move one step at a time. You go back and forth, testing small changes and finding the middle ground between
            what feels okay right now and what might be more sustainable over time. Along the way, Justin sometimes talks about
            a simple set of relationships in the body—"the five relations"—that help you sense balance
            without forcing anything. You'll meet those on the next page.
          </p>

          <ListCard title="What we look at together" className="mt-7">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-soft/90">
              <li>• How you already sit, without calling it wrong</li>
              <li>• Where your body is quietly doing extra work</li>
              <li>• Tiny, realistic changes instead of big corrections</li>
              <li>• Ways of sitting you can actually stay in with ease</li>
              <li>• Noticing balance, support, and ease as you move</li>
            </ul>
          </ListCard>
        </div>
      </div>
    </section>
  );
}
