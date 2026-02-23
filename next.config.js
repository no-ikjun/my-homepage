const createMDX = require("@next/mdx");

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // i18n: {
  //   locales: ["ko", "en"],
  //   defaultLocale: "ko",
  // },
};

module.exports = withMDX(nextConfig);
