# BKLOVESRECS Landing Page

This is the official landing page for the music label BKLOVESRECS. It's a simple, link-tree style page built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## ✨ Features

- **Dynamic Link Management**: Easily add, edit, or remove links from a central file.
- **URL Redirects**: Clean, shareable URLs (e.g., `your-site.com/releases`) that redirect to external sites.
- **System-Aware Dark Mode**: The site automatically adapts to the user's system-level light or dark theme.
- **Custom Font**: Uses the [Manrope](https://fonts.google.com/specimen/Manrope) font via `next/font`.
- **Responsive Design**: Looks great on both desktop and mobile devices.

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd bklovesrecs_website
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔗 How to Update Links

All links and their corresponding redirects are managed in one place: `src/lib/links.ts`.

To add, remove, or edit a button and its redirect, simply modify the `links` array in that file.

```typescript
// src/lib/links.ts

export interface LinkInfo {
  // The text is used for the button text
  text: string;
  // The short text is used for the URL path (e.g., /releases)
  shortText: string;
  // The href is the full external URL the button and redirect will point to
  href: string;
}

// Add or remove objects from this array to update the page
export const links: LinkInfo[] = [
  {
    text: "Releases",
    shortText: "releases",
    href: "https://example.com/releases",
  },
  // ... more links
];
```

After updating `next.config.ts` will automatically use this array to create the redirects. You may need to **restart the development server** for redirect changes to take effect.
