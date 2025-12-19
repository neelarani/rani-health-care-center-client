'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  href: string;
  label: string;
};

const NavbarLinks = ({ navItems }: { navItems: NavItem[] }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted">
      {navItems.map(link => (
        <Link
          key={link.label}
          href={link.href}
          className={`transition-colors ${
            pathname === link.href
              ? 'border-b-4 border-chart-1 text-muted hover:text-muted/80'
              : 'hover:text-muted/70'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarLinks;
