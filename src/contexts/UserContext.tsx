import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TUserContext = {
  user?: string;
  setUser: Dispatch<SetStateAction<string | undefined>>;
};

export const UserContext = createContext({} as TUserContext);

type TUserProcider = {
  children: ReactNode;
};

export const UserProvider = ({ children }: TUserProcider) => {
  const [user, setUser] = useState<string>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
