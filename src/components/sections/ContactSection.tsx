import { Button } from "@/components/ui/button";
import { ListCard } from "@/components/ListCard";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-snap flex items-center justify-center px-[min(10vw,5rem)] py-16"
    >
      <div className="w-full max-w-[860px] mx-auto">
        <p className="font-display text-xs tracking-[0.24em] uppercase text-muted-foreground mb-3">
          Contact
        </p>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-accent-pink text-glow-pink mb-5">
          Sessions &amp; staying in touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 mt-9">
          <div>
            <p className="text-base leading-relaxed text-soft mb-6">
              When you're ready to try a lesson or a group, you can use the links below to register. They lead to
              simple forms where you can pick times, share anything important about your situation, and receive
              practical details.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-5">
              <Button variant="neonCyan" size="lg" asChild>
                <a href="#story">Book an individual session</a>
              </Button>
              <Button variant="neonPink" size="lg" asChild>
                <a href="#story">Register for walk-in groups</a>
              </Button>
            </div>
          </div>

          <ListCard title="Connect & follow">
            <ul className="space-y-2 text-soft/90 text-sm">
              <li>
                • Instagram:{" "}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:underline"
                >
                  @justin.nelson.at
                </a>
              </li>
              <li>
                • YouTube:{" "}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:underline"
                >
                  Justin Nelson – Alexander Technique
                </a>
              </li>
              <li>
                • Facebook:{" "}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:underline"
                >
                  Justin Nelson Alexander Technique
                </a>
              </li>
              <li>• You're welcome to say hello, share a bit of your story, or just quietly follow along.</li>
            </ul>
          </ListCard>
        </div>
      </div>
    </section>
  );
}
