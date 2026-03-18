"use client";

import { useEffect } from "react";

export function TypeformEmbed({ formId }: { formId: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [formId]);

  return (
    <div
      data-tf-widget={formId}
      data-tf-opacity="100"
      data-tf-inline-on-mobile
      data-tf-medium="snippet"
      style={{ width: "100%", height: "500px" }}
    />
  );
}
