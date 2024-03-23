import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-plumPurple via-plumPurple to-xmasCandy flex-col items-center">
      {children}
    </main>
  );
};

export default layout;
