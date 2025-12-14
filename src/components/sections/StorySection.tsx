import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const storySchema = z.object({
  name: z.string().max(100, "Name must be less than 100 characters").optional(),
  email: z.union([
    z.string().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
    z.literal(""),
  ]).optional(),
  message: z.string().trim().min(1, "Please share your story").max(2000, "Message must be less than 2000 characters"),
});

export function StorySection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = storySchema.parse(formData);
      
      // Simulate form submission - in production, this would send to an API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Thank you for sharing",
        description: "Your story has been sent to Justin. He'll be in touch if you've shared your email.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Please check your input",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="story"
      className="section-snap flex items-center justify-center px-[min(10vw,5rem)] py-16"
    >
      <div className="w-full max-w-[860px] mx-auto">
        <p className="font-display text-xs tracking-[0.24em] uppercase text-muted-foreground mb-3">
          Your story
        </p>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-accent-pink text-glow-pink mb-5">
          What does a calm, relaxed body mean to you?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 mt-9">
          <div>
            <p className="text-base leading-relaxed text-soft mb-4">
              This is a space to put some of your own experience into words. You might think about times when your body
              has felt more settled, or moments when you realised just how much effort you were using to get through
              the day.
            </p>
            <p className="text-base leading-relaxed text-soft">
              There's no right answer. You can write about pain, exhaustion, curiosity, or tiny glimpses of ease.
              The aim isn't to fix anything here, just to start from where you truly are.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="story-name"
                className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
              >
                Name (optional)
              </label>
              <input
                id="story-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Your name, if you'd like to share it"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/98 text-foreground text-sm outline-none focus:border-accent-cyan focus:shadow-[0_0_10px_hsl(185_100%_64%/0.7),0_0_18px_hsl(185_100%_64%/0.5)] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="story-email"
                className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
              >
                Email (optional)
              </label>
              <input
                id="story-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/98 text-foreground text-sm outline-none focus:border-accent-cyan focus:shadow-[0_0_10px_hsl(185_100%_64%/0.7),0_0_18px_hsl(185_100%_64%/0.5)] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="story-message"
                className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
              >
                Your story
              </label>
              <textarea
                id="story-message"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="What does a calm, relaxed body mean to you? How has your journey with tension, pain, or ease felt so far?"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/98 text-foreground text-sm outline-none min-h-[140px] resize-y focus:border-accent-cyan focus:shadow-[0_0_10px_hsl(185_100%_64%/0.7),0_0_18px_hsl(185_100%_64%/0.5)] transition-all"
              />
            </div>

            <Button
              type="submit"
              variant="neonCyan"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send to Justin"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
