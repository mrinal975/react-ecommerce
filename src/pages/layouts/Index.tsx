import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DefaultLayout;
