import React from "react";
import sate from "../../assets/menus-page/sate2.jpg";

const Card = (props) => {
  return (
    <>
      <div className="rounded-lg shadow-xl p-2 text-black">
        <div className="flex gap-3">
          <div className="p-3 bg-red-300 w-48">
            <div className="bg-blue-300 rounded-lg relative h-full">
              <img
                src={props.img}
                alt={props.name}
                className="object-contain relative"
              />
              <button className="bg-white absolute top-0 right-0">like</button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex bg-red-600 text-white rounded-full font-semibold py-1 px-3 w-44">
              <img />
              <p className="">Diskon Member</p>
            </div>
            <div className="my-2">
              <h2 className="font-semibold text-xl capitalize">{props.name}</h2>
              <p className="text-slate-500 ">Rp.{props.price}</p>
              <div className=" flex justify-end w-full">
                <button className="bg-red-600 text-white rounded-full font-semibold py-2 px-4 text-sm">
                  PESAN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
