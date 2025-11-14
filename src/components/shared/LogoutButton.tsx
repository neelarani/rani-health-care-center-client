'use client';

import { logoutUser } from '@/services/auth/logoutUser';
import { Button } from '../ui/button';

const LogoutButton = () => {
  const handleLogout = async () => {
    await logoutUser();
  };
  return (
    <Button
      variant={'default'}
      onClick={handleLogout}
      className="cursor-pointer"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
