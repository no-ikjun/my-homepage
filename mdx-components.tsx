import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  p: (props) => <p {...props} />,
  a: (props) => <a {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
  code: (props) => <code {...props} />,
  pre: (props) => <pre {...props} />,
  blockquote: (props) => <blockquote {...props} />,
};

export function useMDXComponents(overrides: MDXComponents): MDXComponents {
  return {
    ...components,
    ...overrides,
  };
}
