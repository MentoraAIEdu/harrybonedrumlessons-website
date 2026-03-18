"use client";

import { useEffect } from "react";

export function StudentPortalWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9MckJKbSIsIldlYnNpdGVJRCI6Indic181cTZKUCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX0toc05KWSJ9";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="mms-widget" />;
}
