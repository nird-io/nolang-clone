import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex py-20 gap-8 md:px-8 flex-col bg-sky-50 text-black text-base">
      <div className="grid grid-cols-1 justify-between p-4 md:grid-cols-4">
        <div className="flex gap-4 flex-col p-4">
          <h3 className="text-5xl font-bold text-[#4285f4]">Noolag</h3>
          <p className="font-bold text-2xl">Stay Connected with Noolag</p>
        </div>
        <div className="flex flex-col text-base p-4 gap-4">
          <h3 className="font-extrabold text-xl ">Company</h3>
          <p>GET STARTED ABOUT US CONTACT US</p>
        </div>
        <div className="flex flex-col text-base p-4 gap-4">
          <h3 className="font-extrabold text-xl ">Help</h3>
          <p>GET STARTED ABOUT US CONTACT US</p>
        </div>
        <div className="flex flex-col text-base p-4 gap-4">
          <h3 className="font-extrabold text-xl ">CONTACT INFO</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span>+19803611860</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
