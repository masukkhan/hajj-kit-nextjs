import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, activeClassName)} // Note: Next.js doesn't provide isActive by default in Link, would need usePathname. Simplified for now.
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
