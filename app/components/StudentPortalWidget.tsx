"use client";

import { useEffect, useRef } from "react";

export function StudentPortalWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9MckJKbSIsIldlYnNpdGVJRCI6Indic181cTZKUCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX0toc05KWSJ9";
    script.async = true;

    // Append to container instead of body so it renders in the right place
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[500px] bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl p-6"
    />
  );
}
