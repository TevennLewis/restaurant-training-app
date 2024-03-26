import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen text-flameOrange bg-gradient-to-b from-xmasCandy via-xmasCandy to-plumPurple flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default layout;
