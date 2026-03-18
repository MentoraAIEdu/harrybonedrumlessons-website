"use client";

export function SoundsliceEmbed({ sliceUrl }: { sliceUrl: string }) {
  // Add URL params for better display: horizontal scroll + auto-shrink notation to fit
  const separator = sliceUrl.includes("?") ? "&" : "?";
  const enhancedUrl = `${sliceUrl}${separator}layout=2&hshrink=1&zoom=3`;

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--color-card-border)]" style={{ height: "clamp(400px, 60vw, 550px)" }}>
      <iframe
        src={enhancedUrl}
        title="Soundslice interactive sheet music"
        allowFullScreen
        className="w-full h-full"
        frameBorder="0"
      />
    </div>
  );
}
