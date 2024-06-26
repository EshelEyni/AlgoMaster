import { FC } from "react";

type MainProps = {
  children: React.ReactNode;
};

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto focus:outline-none">
      {children}
    </main>
  );
};
