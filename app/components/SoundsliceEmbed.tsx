"use client";

export function SoundsliceEmbed({ sliceUrl }: { sliceUrl: string }) {
  return (
    <div className="aspect-[3/5] sm:aspect-[4/3] lg:aspect-video rounded-xl overflow-hidden border border-[var(--color-card-border)]">
      <iframe
        src={sliceUrl}
        title="Soundslice interactive sheet music"
        allowFullScreen
        className="w-full h-full"
        frameBorder="0"
      />
    </div>
  );
}
