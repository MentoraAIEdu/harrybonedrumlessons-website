"use client";

import { useState } from "react";
import { SenjaEmbed } from "./SenjaEmbed";

/**
 * The full Senja wall of reviews, loaded only when asked for. The three
 * reviews above it are plain text, which is what search engines read; the
 * Senja widget renders inside a shadow root they can't see into.
 */
export function SenjaOnTap({ widgetId }: { widgetId: string }) {
  const [shown, setShown] = useState(false);
  if (shown) return <SenjaEmbed widgetId={widgetId} />;
  return (
    <>
      <p>Every review from students and parents, collected on Senja.</p>
      <div>
        <button type="button" className="btn btn-secondary" onClick={() => setShown(true)}>
          Show all reviews
        </button>
      </div>
    </>
  );
}
