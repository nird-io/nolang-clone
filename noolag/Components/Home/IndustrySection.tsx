import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";

export const IndustrySection = () => {
  return (
    <div className="w-full h-[35rem] py-4 flex gap-8 border-rose-500 px-12">
      <div className="w-72 rounded-2xl py-4 bg-[#4285F4] text-white">
        <ul className="mt-10 flex flex-col gap-8 w-full">
          <li className="px-8 py-2 w-full bg-white text-[#4285fa]">Retail</li>
          <li className="px-8 py-2 w-full text-white">Healthcare</li>
          <li className="px-8 py-2 w-full text-white">Education</li>
          <li className="px-8 py-2 w-full text-white">Manufacturing</li>
          <li className="px-8 py-2 w-full text-white">Non-Profit</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 border rounded-xl p-12 w-full">
        <h3 className="font-bold text-3xl">Retail</h3>
        <p className="max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          voluptate itaque sapiente illum rerum asperiores!
        </p>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#4285Fa]">FEATURES</h4>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              harum?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              harum?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              harum?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              harum?
            </li>
          </ul>
          <div>
            <Button
              variant="contained"
              className="bg-[#4285Fa] text-white"
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Explore all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
