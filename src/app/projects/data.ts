import { link } from "fs";

// pages/projects/data.js
export const projects = [
  {
    title: "SPRIT",
    description: "App service that creates a steady reading habit.",
    directLink: "https://sprit-app.me",
    techStack: ["flutter", "NextJS", "NestJS", "docker", "AWS"],
    links: [
      {
        type: "github",
        url: "https://github.com/no-ikjun/sprit",
        description: "APP GitHub repository",
      },
      {
        type: "github",
        url: "https://github.com/no-ikjun/sprit-be",
        description: "Backend GitHub repository",
      },
      {
        type: "website",
        url: "https://disquiet.io/product/%EC%8A%A4%ED%94%84%EB%A6%BF",
        description: "Disquiet project url",
      },
    ],
  },
  {
    title: "DeokDam Pocket",
    description: "New year's Greeting Platform",
    directLink: "https://deokdam.app",
    techStack: ["NextJS"],
    links: [
      {
        type: "github",
        url: "https://github.com/no-ikjun/deokdam-pocket",
        description: "GitHub repository",
      },
      {
        type: "website",
        url: "https://www.instagram.com/deokdam_pocket/",
        description: "Instagram profile",
      },
    ],
  },
  {
    title: "AI Analyst",
    description: "Auto-reporting system for stock item analysis using ChatGPT",
    directLink: "https://analyst.ikjun.com",
    techStack: ["React", "CloudFlare", "NestJS", "AWS"],
    links: [
      {
        type: "github",
        url: "https://github.com/no-ikjun/analyst-nest",
        description: "Backend GitHub repository",
      },
      {
        type: "github",
        url: "https://github.com/no-ikjun/analyst-fe",
        description: "Frontend GitHub repository",
      },
    ],
  },
];
