import React from "react";

import NavbarMenu from "@/components/menus-page/Navbar";
import Card from "@/components/menus-page/Card";
import sate from "../../assets/menus-page/sate2.jpg";

const index = () => {
  return (
    <>
      <div className="font-sans text-black relative overflow-x-hidden">
      <div className=" bottom-3 fixed w-screen flex justify-center">
          <button className="bg-purple-800 py-2 px-4 text-white font-semibold rounded-full">
            Kategori
          </button>
        </div>
        <div className="border-b">
          <NavbarMenu />
        </div>
        <div className="px-[5%] ">
          <div className="pt-2">
            <div className="mb-3">
              <h1 className="font-semibold text-2xl ">Raja Uduk Teuku Umar</h1>
              <p className=" ">Jl. Teuku Umar No.76</p>
            </div>

            <button className="text-red-400 font-medium text-sm">
              JAM OPERASIONAL
            </button>
          </div>

          <div className="mt-8">
            <h1 className="font-semibold text-xl">Promo</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card img={sate} name="Sate Ayam" price="27.000" />
              <Card img={sate} name="Nasi Goreng" price="20.000" />
              <Card img={sate} name="Mie Goreng" price="18.000" />
              <Card img={sate} name="Soto Ayam" price="25.000" />
              <Card img={sate} name="Rendang" price="30.000" />
              <Card img={sate} name="Nasi Uduk" price="22.000" />
              <Card img={sate} name="Sate Padang" price="35.000" />
              <Card img={sate} name="Gado-Gado" price="20.000" />
              <Card img={sate} name="Mie Ayam" price="18.000" />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default index;
