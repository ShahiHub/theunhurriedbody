import { ListCard } from "@/components/ListCard";

export function SessionsSection() {
  return (
    <section
      id="sessions"
      className="section-snap flex items-center justify-center px-[min(10vw,5rem)] py-16"
    >
      <div className="w-full max-w-[860px] mx-auto">
        <p className="font-display text-xs tracking-[0.24em] uppercase text-muted-foreground mb-3">
          Sessions
        </p>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-accent-pink text-glow-pink mb-5">
          Unrushed time for your nervous system
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-9">
          <ListCard title="1:1 sessions">
            <ul className="space-y-2 text-soft/90 text-sm">
              <li>• 45–60 minutes of individual time, in person or online</li>
              <li>• Time to look at how you sit, stand, work, and move in everyday life</li>
              <li>• Gentle hands-on guidance and clear verbal cues</li>
              <li>• No requirement to hold a "perfect" posture or perform</li>
              <li>• Intro lesson rates available for new students</li>
            </ul>
          </ListCard>

          <ListCard title="Walk-in groups">
            <ul className="space-y-2 text-soft/90 text-sm">
              <li>• Free, slower-paced group sessions</li>
              <li>• A chance to experience the work without pressure to "get it right"</li>
              <li>• Shared explorations of sitting, standing, and breathing together</li>
              <li>• A room where you don't have to be productive or "on"</li>
              <li>• Register via the contact page for schedule and details</li>
            </ul>
          </ListCard>
        </div>
      </div>
    </section>
  );
}
