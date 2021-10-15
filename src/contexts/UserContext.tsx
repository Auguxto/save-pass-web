import { createContext, ReactNode, useState } from "react";

type TUserContext = {
  user?: string;
  handleLogin: (user: string) => void;
  handleLogout: () => void;
};

export const UserContext = createContext({} as TUserContext);

type TUserProcider = {
  children: ReactNode;
};

export const UserProvider = ({ children }: TUserProcider) => {
  const [user, setUser] = useState<string>();

  function handleLogin(user: string) {
    setUser(user);
  }

  function handleLogout() {
    setUser(undefined);
    localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
