import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Plugins are named as strings so the config stays serialisable for Turbopack.
  options: {
    remarkPlugins: [["remark-gfm", {}], ["remark-math", {}]],
    rehypePlugins: [
      ["rehype-slug", {}],
      ["rehype-katex", { output: "htmlAndMathml" }],
      [
        "rehype-pretty-code",
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
          defaultLang: "plaintext",
        },
      ],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // The social-card and CV routes read fonts and the avatar from disk at runtime.
  outputFileTracingIncludes: {
    "/og": ["./src/app/og/*.ttf", "./src/app/og/avatar.png"],
    "/cv": ["./src/app/og/*.ttf", "./src/app/og/avatar.png"],
  },
  // react-pdf ships its own layout engine and font parser; bundling it breaks font loading.
  serverExternalPackages: ["@react-pdf/renderer"],
  // Conservative security headers. A full CSP is intentionally left out: the
  // theme bootstrap and JSON-LD are inline <script> tags and would need a nonce
  // or hash before script-src could be locked down.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  images: {
    // Hosts allowed for next/image optimisation. Keep in sync with the
    // `logo` fields in src/data/timeline.ts and `image` in content/projects - an
    // unlisted host throws at request time.
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
