import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";

export const IndustriesCard = () => {
  return (
    <div className="flex flex-col gap-3 items-center w-full py-12">
      <h3 className="text-indigo-800 rounded-full bg-[#f2f2f2] px-5">
        Industries
      </h3>
      <h2 className="text-3xl font-bold">
        Tailored Solutions for Diverse Industies
      </h2>
      <p className="text-base max-w-xl text-center">
        At Noolag, we understand that every industry is unique and requires
        specific software solutions. Our applications cater to various sectors,
        including:
      </p>
    </div>
  );
};
