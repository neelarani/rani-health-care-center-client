'use client';

import { logoutUser } from '@/services/auth/logoutUser';
import { Button } from '../ui/button';

const LogoutButton = () => {
  const handleLogout = async () => {
    await logoutUser();
  };
  return (
    <Button className="bg-chart-1 hover:bg-chart-1/80 " onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
