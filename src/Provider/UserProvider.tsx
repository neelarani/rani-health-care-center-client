'use client';

import { userInterface } from '@/types/userTypes';
import checkAuthStatus from '@/utility/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface IUserContext {
  user: userInterface | null;
  setUser: React.Dispatch<React.SetStateAction<userInterface | null>>;
}

const UserContext = createContext<IUserContext | null>(null);

export const UseUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({
  initialUser,
  children,
}: {
  initialUser?: userInterface | null;
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<userInterface | null>(null);

  useEffect(() => {
    const revalidateUser = async () => {
      try {
        const res = await checkAuthStatus();
        setUser(res.user);
      } catch {
        setUser(null);
      }
    };
    if (!user) {
      revalidateUser();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
