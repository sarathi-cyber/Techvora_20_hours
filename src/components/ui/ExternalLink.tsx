import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isSafeExternalUrl } from "@/lib/site";

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> { href: string; children: ReactNode; }

export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  if (!isSafeExternalUrl(href)) return <span aria-disabled="true" className={rest.className}>{children}</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
}
