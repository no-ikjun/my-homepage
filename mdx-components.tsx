import type { MDXComponents } from "mdx/types";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";

/**
 * `![alt](src "caption")` renders as a figure; the title becomes the caption.
 * Images load lazily. Local files go under public/img/writings/<slug>/.
 */
function MdxImage({ src, alt, title, ...rest }: ComponentProps<"img">) {
  return (
    <figure>
      {/* Plain <img>: MDX gives no intrinsic size for next/image; lazy loading covers the cost. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ""} loading="lazy" decoding="async" {...rest} />
      {title ? <figcaption>{title}</figcaption> : null}
    </figure>
  );
}

function isImage(node: ReactNode): boolean {
  if (!isValidElement(node)) return false;
  const el = node as ReactElement<{ src?: unknown }>;
  return el.type === MdxImage || typeof el.props?.src === "string";
}

/** Markdown wraps a lone image in <p>; a <figure> cannot live there, so unwrap it. */
function MdxParagraph({ children, ...rest }: ComponentProps<"p">) {
  const items = Children.toArray(children);
  if (items.length === 1 && isImage(items[0])) return <>{items[0]}</>;
  return <p {...rest}>{children}</p>;
}

const components: MDXComponents = {
  img: MdxImage,
  p: MdxParagraph,
};

export function useMDXComponents(overrides: MDXComponents): MDXComponents {
  return { ...components, ...overrides };
}
