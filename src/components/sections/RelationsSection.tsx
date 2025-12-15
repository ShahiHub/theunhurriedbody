import { useState } from "react";
import { cn } from "@/lib/utils";

const relations = [
  {
    key: "room",
    label: "0 • Awareness in the room",
    description:
      "Before anything else, there's the room itself—the floor, chair, wall, air, light, and sounds. This relation is about widening your awareness so you feel supported by the environment around you, rather than holding yourself up as if you were separate from it.",
  },
  {
    key: "head-body",
    label: "1 • Head leads body follows",
    description:
      "Here you explore how a gently directed head can lead the whole body into movement. Instead of hauling yourself into a position, you let the head find a clear direction and notice how the rest of you is willing to follow with much less effort.",
  },
  {
    key: "legs-torso",
    label: "2 • Leg torso counter balance",
    description:
      "Many of us ask our lower back or neck to do everything. This relation looks at how your legs and torso can quietly counterbalance each other, so you're not collapsing at the desk or stiffening to stay upright. The work spreads out instead of landing in one overworked area.",
  },
  {
    key: "head-pelvis",
    label: "3 • Head pelvis counter balance",
    description:
      "When your head and pelvis are quietly balancing each other, your spine has room to lengthen without you pulling yourself up. Small shifts in where you aim your head can change how heavy or light the rest of you feels, especially when sitting and standing.",
  },
  {
    key: "hands-ribs",
    label: "4 • Hands supporting and supported by the rib cage",
    description:
      "Typing, reaching, cooking, playing an instrument—your hands do a lot. In this relation, you notice how your rib cage and upper back can support your arms, and how your hands can work in conversation with that support, rather than dragging your shoulders and neck into tension every time you reach.",
  },
  {
    key: "lungs",
    label: "5 • Lungs and breathing",
    description:
      'Rather than "taking a deep breath" by effort, you invite your whole torso to be a place where breath can move. As your ribs and back un-grip, breathing becomes more three-dimensional and connected to your whole shape, and your nervous system often has an easier time settling.',
  },
];

type RelationKey = (typeof relations)[number]["key"];

export function RelationsSection() {
  const [activeRelation, setActiveRelation] = useState<RelationKey>("room");

  const handleClick = (key: RelationKey) => {
    setActiveRelation((prev) => (prev === key ? "room" : key));
  };

  return (
    <section
      id="relations"
      className="section-snap flex items-center justify-center px-[min(10vw,5rem)] py-16"
    >
      <div className="w-full max-w-[860px] mx-auto">
        <p className="font-display text-xs tracking-[0.24em] uppercase text-muted-foreground mb-3">
          The 5 relations
        </p>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-accent-pink text-glow-pink mb-5">
          How different parts talk to each other
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 mt-9">
          {/* Skeleton Figure */}
          <div className="flex flex-col items-center gap-4">
            <SkeletonFigure activeRelation={activeRelation} />
            <p className="text-xs text-muted-foreground text-center max-w-[14rem]">
              Tap a relation and notice which areas glow. Click it again to fold the description up.
            </p>
          </div>

          {/* Relations List */}
          <div className="flex flex-col gap-2">
            {relations.map((relation) => (
              <div key={relation.key}>
                <button
                  type="button"
                  onClick={() => handleClick(relation.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl border border-border bg-card/90 cursor-pointer transition-all duration-150",
                    "hover:border-accent-cyan hover:shadow-[0_0_10px_hsl(185_100%_64%/0.5),0_0_18px_hsl(185_100%_64%/0.4)]",
                    activeRelation === relation.key && [
                      "border-accent-pink",
                      "shadow-[0_0_10px_hsl(315_100%_71%/0.6),0_0_18px_hsl(315_100%_71%/0.5)]",
                      "bg-[radial-gradient(circle_at_top_left,hsl(315_100%_71%/0.12),hsl(0_0%_0%/0.95))]",
                    ]
                  )}
                >
                  <span className="font-display text-sm tracking-[0.08em] text-foreground">
                    {relation.label}
                  </span>
                </button>
                {activeRelation === relation.key && (
                  <div className="mt-2 mb-1 px-4 py-3 text-sm leading-relaxed text-soft">
                    {relation.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkeletonFigureProps {
  activeRelation: RelationKey;
}

function SkeletonFigure({ activeRelation }: SkeletonFigureProps) {
  const getPartStyles = (part: string) => {
    const baseStyles = "absolute left-1/2 -translate-x-1/2 bg-accent-purple/40 rounded-full transition-all duration-200 opacity-40";
    
    const glowMap: Record<RelationKey, string[]> = {
      room: ["head", "neck", "spine", "ribcage", "pelvis", "leg-left", "leg-right", "arm-left", "arm-right"],
      "head-body": ["head", "neck", "spine", "pelvis"],
      "legs-torso": ["spine", "pelvis", "leg-left", "leg-right"],
      "head-pelvis": ["head", "spine", "pelvis"],
      "hands-ribs": ["ribcage", "arm-left", "arm-right"],
      lungs: ["ribcage", "spine"],
    };

    const colorMap: Record<RelationKey, string> = {
      room: "bg-accent-purple/60 shadow-[0_0_10px_hsl(237_100%_81%/0.9),0_0_22px_hsl(237_100%_81%/0.8)]",
      "head-body": "bg-accent-cyan shadow-[0_0_10px_hsl(185_100%_64%/0.9),0_0_22px_hsl(185_100%_64%/0.8)]",
      "legs-torso": "bg-accent-pink shadow-[0_0_10px_hsl(315_100%_71%/0.9),0_0_22px_hsl(315_100%_71%/0.8)]",
      "head-pelvis": "bg-accent-green shadow-[0_0_10px_hsl(149_87%_72%/0.9),0_0_22px_hsl(149_87%_72%/0.8)]",
      "hands-ribs": "bg-accent-gold shadow-[0_0_10px_hsl(42_100%_72%/0.9),0_0_22px_hsl(42_100%_72%/0.8)]",
      lungs: "bg-accent-purple shadow-[0_0_10px_hsl(237_100%_81%/0.9),0_0_22px_hsl(237_100%_81%/0.8)]",
    };

    const isActive = glowMap[activeRelation]?.includes(part);
    
    return cn(baseStyles, isActive && ["opacity-100", colorMap[activeRelation]]);
  };

  return (
    <div className="w-[220px] h-[340px] relative drop-shadow-[0_0_12px_hsl(185_100%_64%/0.5)] drop-shadow-[0_0_18px_hsl(315_100%_71%/0.4)]">
      {/* Head */}
      <div className={cn(getPartStyles("head"), "top-[10px] w-[54px] h-[54px]")} />
      {/* Neck */}
      <div className={cn(getPartStyles("neck"), "top-[66px] w-[10px] h-[18px]")} />
      {/* Spine */}
      <div className={cn(getPartStyles("spine"), "top-[84px] w-[14px] h-[80px]")} />
      {/* Ribcage */}
      <div className={cn(getPartStyles("ribcage"), "top-[96px] w-[80px] h-[60px]")} />
      {/* Pelvis */}
      <div className={cn(getPartStyles("pelvis"), "top-[160px] w-[70px] h-[40px]")} />
      {/* Legs */}
      <div className={cn(getPartStyles("leg-left"), "top-[200px] w-[16px] h-[90px] -translate-x-[34px]")} />
      <div className={cn(getPartStyles("leg-right"), "top-[200px] w-[16px] h-[90px] translate-x-[18px]")} />
      {/* Arms */}
      <div className={cn(getPartStyles("arm-left"), "top-[118px] w-[80px] h-[12px] left-[calc(50%-56px)] translate-x-0")} />
      <div className={cn(getPartStyles("arm-right"), "top-[118px] w-[80px] h-[12px] left-[calc(50%-24px)] translate-x-0")} />
    </div>
  );
}
