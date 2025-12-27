import { getDefaultDashboardRoute } from '@/lib/auth-utils';
import { getUserInfo } from '@/services/auth/getUserInfo';
import { getCookie } from '@/services/auth/tokenHandlers';
import Link from 'next/link';
import AISearchDialog from './AISSearchDialog';
import MobileMenu from './MobileMenu';
import NavbarAuthButtons from './NavbarAuthButtons';
import NavbarLinks from './NavbarLinks';

import Image from 'next/image';
import logo from '../../assets/logo/logo.png';

const PublicNavbar = async () => {
  const navItems = [
    { href: '/consultation', label: 'Consultation' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },

    { href: '/health-plans', label: 'Health Plans' },
    { href: '/medicine', label: 'Medicine' },
    { href: '/diagnostics', label: 'Diagnostics' },
    { href: '/ngos', label: 'NGOs' },
  ];

  const accessToken = await getCookie('accessToken');
  const userInfo = accessToken ? await getUserInfo() : null;
  const dashboardRoute = userInfo
    ? getDefaultDashboardRoute(userInfo.role)
    : '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-foreground border-muted-foreground/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-muted pt-3">
          <Image src={logo} alt="logo" width={220} height={220}></Image>
        </Link>

        {/* Client Component */}
        <NavbarLinks navItems={navItems} />

        <div className="hidden md:flex items-center space-x-2">
          <AISearchDialog />
          <NavbarAuthButtons
            initialHasToken={!!accessToken}
            initialUserInfo={userInfo}
            initialDashboardRoute={dashboardRoute}
          />
        </div>

        <MobileMenu
          navItems={navItems}
          hasAccessToken={!!accessToken}
          userInfo={userInfo}
          dashboardRoute={dashboardRoute}
        />
      </div>
    </header>
  );
};

export default PublicNavbar;
