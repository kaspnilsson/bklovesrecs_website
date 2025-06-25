// components/themed-logo.tsx

"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemedLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let src;

  // useEffect only runs on the client, so now we can safely show the UI
  // This avoids a hydration mismatch error.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Until the component is mounted, we can show a placeholder or nothing
  if (!mounted) {
    // To avoid layout shift, you can return a placeholder image or a div
    // with the same dimensions as your logo.
    return (
      <div className="relative w-full max-w-2xl aspect-video overflow-hidden text-2xl flex items-center justify-center">
        BK❤️RECS
      </div>
    );
  }

  switch (resolvedTheme) {
    case "dark":
      src = "/bk-recs-logo-dark.png"; 
      break;
    case "light":
    default:
      src = "/bk-recs-logo-light.png"; 
      break;
  }

  return (
    <div className="relative sm:mb-12 mb-6 w-full max-w-2xl aspect-video">
      <Image
        src={src}
        alt="BKLOVESRECS Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}