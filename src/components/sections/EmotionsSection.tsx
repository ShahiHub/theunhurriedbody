import { ListCard } from "@/components/ListCard";

export function EmotionsSection() {
  return (
    <section
      id="emotions"
      className="section-snap flex items-center justify-center px-[min(10vw,5rem)] py-16"
    >
      <div className="w-full max-w-[860px] mx-auto">
        <p className="font-display text-xs tracking-[0.24em] uppercase text-muted-foreground mb-3">
          Emotions &amp; holding
        </p>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-accent-pink text-glow-pink mb-5">
          When emotions and posture move together
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 mt-9">
          <div>
            <p className="text-base leading-relaxed text-soft mb-4">
              The Alexander Technique isn't therapy, but it does have a lot to do with how emotions and tension
              show up in the body. Stress, fear, and old experiences often leave us in a kind of quiet "startle
              pattern"—neck tight, back shortened, breath shallow—long after the original moment has
              passed.
            </p>
            <p className="text-base leading-relaxed text-soft">
              In lessons you learn to notice those habits of tightening as they're happening, and to pause before
              they run the show. Bit by bit, that creates space for calmer, more grounded responses instead of being
              pulled around by old reactions.
            </p>
          </div>

          <ListCard title="How this shows up in lessons">
            <ul className="space-y-2 text-soft/90 text-sm">
              <li>• You notice how worry or hurry changes your breathing and posture</li>
              <li>• You practice stopping for a moment, instead of pushing through</li>
              <li>• You release tension gently, rather than forcing it away</li>
              <li>• Sometimes emotions feel closer to the surface, while you stay supported enough to stay present</li>
              <li>• Over time, "length without strain" becomes a real, felt option</li>
            </ul>
          </ListCard>
        </div>
      </div>
    </section>
  );
}
