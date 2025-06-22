import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 sm:p-8">
      <div className="relative sm:mb-12 mb-6 w-full max-w-2xl aspect-video overflow-hidden rounded-xl">
        <Image
          src="/bk-recs-logo.jpg"
          alt="BKLOVESRECS Logo"
          fill
          className="object-cover dark:invert"
          priority
        />
      </div>
      <div className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row justify-center">
        {links.map((link) => (
          <Button key={link.text} asChild size="xl" variant="outline">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </Button>
        ))}
      </div>
    </main>
  );
}
