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
    text: "Links",
    shortText: "links",
    href: "https://linktr.ee/bklovesrecs",
  },
  {
    text: "Releases",
    shortText: "releases",
    href: "https://soundcloud.com/bk-loves-recs/sets/bk-loves-recs-releases",
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
  {
    text: "Submit a demo",
    shortText: "submit",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdVEZwK2s_KtMZ8ZRHTv6p8BixoLfOWMkoGDbxIS2u_z7e7JA/viewform",
  },
];
