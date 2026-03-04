import { cn } from "@/lib/utils";

type WordmarkChunkProps = {
  text: string;
  className?: string;
  gradient: string;
  glow: string;
};

function WordmarkChunk({
  text,
  className,
  gradient,
  glow,
}: WordmarkChunkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-block align-baseline text-[clamp(1.45rem,8.6vw,5.8rem)] leading-none",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 text-[#07192e]"
        style={{
          WebkitTextStroke: "4px rgba(4, 16, 33, 0.95)",
          textShadow:
            "0 2px 0 rgba(0,0,0,0.8), 0 8px 18px rgba(0,0,0,0.45), 0 0 10px rgba(3,8,18,0.7)",
        }}
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-clip-text text-transparent opacity-70"
        style={{
          backgroundImage: gradient,
          filter: "blur(1.2px)",
        }}
      >
        {text}
      </span>
      <span
        className="relative bg-clip-text text-transparent"
        style={{
          backgroundImage: gradient,
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
          textShadow: glow,
        }}
      >
        {text}
      </span>
    </span>
  );
}

type MazinmindWordmarkTextProps = {
  className?: string;
};

export function MazinmindWordmarkText({
  className,
}: MazinmindWordmarkTextProps) {
  return (
    <div
      role="img"
      aria-label="MazinMind.Digital"
      className={cn(
        "relative inline-flex items-end justify-center whitespace-nowrap select-none pointer-events-none font-display uppercase tracking-[0.03em] leading-none",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-[2%] bottom-[8%] h-[8%] rounded-full opacity-30 blur-md"
        style={{
          background:
            "linear-gradient(90deg, rgba(56,189,248,0.7) 0%, rgba(163,230,53,0.5) 55%, rgba(249,115,22,0.65) 100%)",
        }}
      />
      <WordmarkChunk
        text="MAZINMIND"
        gradient="linear-gradient(90deg, #1495ff 0%, #48d6ff 48%, #c4ff4f 100%)"
        glow="0 0 10px rgba(56, 189, 248, 0.4), 0 0 20px rgba(56, 189, 248, 0.2)"
      />
      <WordmarkChunk
        text=".DIGITAL"
        className="-ml-[0.02em]"
        gradient="linear-gradient(90deg, #f7d039 0%, #ffc107 35%, #ff9f0a 70%, #ff6a00 100%)"
        glow="0 0 10px rgba(251, 191, 36, 0.45), 0 0 20px rgba(251, 146, 60, 0.22)"
      />
    </div>
  );
}

export default MazinmindWordmarkText;
