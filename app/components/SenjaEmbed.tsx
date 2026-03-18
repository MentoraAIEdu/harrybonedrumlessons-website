"use client";

import { useEffect } from "react";

export function SenjaEmbed({ widgetId }: { widgetId: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.senja.io/widget/" + widgetId + "/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [widgetId]);

  return (
    <div
      className="senja-embed"
      data-id={widgetId}
      data-mode="shadow"
      data-lazyload="false"
    />
  );
}
