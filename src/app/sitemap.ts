import { MetadataRoute } from "next";

export default function sitemap(): {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  //   alternates?: {
  //     languages?: Record<string, string>;
  //   };
  alternateRefs: Array<{ href: string; hreflang: string }>;
}[] {
  return [
    {
      url: "https://nouridine.me/en",
      lastModified: new Date(),
      alternateRefs: [
        {
          href: "https://nouridine.me/fr",
          hreflang: "fr",
        },
      ],
      //   alternates: {
      //     languages: {
      //       fr: "https://nouridine.me/fr",
      //     },
      //   },
      priority: 1,
      changeFrequency: "daily",
    },
    {
      url: "https://nouridine.me/en/resume",
      lastModified: new Date(),
      //   alternates: {
      //     languages: {
      //       fr: "https://nouridine.me/fr/resume",
      //     },
      //   }
      alternateRefs: [
        {
          href: "https://nouridine.me/fr/resume",
          hreflang: "fr",
        },
      ],
      priority: 0.9,
      changeFrequency: "daily",
    },
    {
      url: "https://nouridine.me/en/portfolio",
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       fr: "https://nouridine.me/fr/portfolio",
    //     },
    //   },
    alternateRefs: [
        {
          href: "https://nouridine.me/fr/portfolio",
          hreflang: "fr",
        },
      ],
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: "https://nouridine.me/en/contact",
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       fr: "https://nouridine.me/fr/contact",
    //     },
    //   },
    alternateRefs: [
        {
          href: "https://nouridine.me/fr/contact",
          hreflang: "fr",
        },
      ],
      priority: 0.7,
      changeFrequency: "daily",
    },
    {
      url: "https://nouridine.me/en/blog",
      lastModified: new Date(),
    //   alternates: {
    //     languages: {
    //       fr: "https://nouridine.me/fr/blog",
    //     },
    //   },
    alternateRefs: [
        {
          href: "https://nouridine.me/fr/blog",
          hreflang: "fr",
        },
      ],
      changeFrequency: "daily",
    },
  ];
}
