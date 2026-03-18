"use client";

export function SoundsliceEmbed({ sliceUrl }: { sliceUrl: string }) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden border border-[var(--color-card-border)]">
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
