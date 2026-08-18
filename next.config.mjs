import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    // Hosts allowed for next/image optimisation. Keep in sync with the
    // `image` fields in src/data/*.ts - an unlisted host throws at request time.
    remotePatterns: [
      { protocol: "https", hostname: "d3ob3cint7tr3s.cloudfront.net" },
      { protocol: "https", hostname: "chatbot.gistory.me" },
      { protocol: "https", hostname: "analyst.ikjun.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "play-lh.googleusercontent.com" },
    ],
  },
};

export default withMDX(nextConfig);
