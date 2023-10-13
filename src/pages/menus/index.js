import React from "react";

import NavbarMenu from "@/components/menus-page/Navbar"
import Card from "@/components/menus-page/Card";

const Navbar = () => {
  return (
    <>
      <div>
        <NavbarMenu />
        <h1 className="font-bold text-xl text-red-400">Menus</h1>
        <Card />
      </div>
    </>
  );
};

export default Navbar;
