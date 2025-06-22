export interface LinkInfo {
  // The text is used for the button text
  text: string;
  // The short text is used for the URL path
  shortText: string;
  // The href is used for the button link
  href: string;
}

// Order is the order of the buttons
export const links: LinkInfo[] = [
  {
    text: "Releases",
    shortText: "releases",
    href: "https://soundcloud.com/bk-loves-recs/sets/bk-loves-recs-releases",
  },
  {
    text: "Links",
    shortText: "links",
    href: "https://linktr.ee/bklovesrecs",
  },
  {
    text: "Submit a demo",
    shortText: "submit",
    // TODO: Replace with actual contact page
    href: "https://www.instagram.com/bklovesrecs/",
  },
  {
    text: "Instagram",
    shortText: "instagram",
    href: "https://www.instagram.com/bklovesrecs/",
  },
  {
    text: "Discord",
    shortText: "discord",
    href: "https://discord.gg/umxmvfVG9Z",
  },
];
