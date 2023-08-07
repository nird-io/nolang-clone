import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";

export const Pricing = () => {
  return (
    <div className="grid grid-cols-2 items-center px-24 bg-sky-50 w-full py-12 mt-12">
      <div className="p-4 flex flex-col gap-6">
        <h3 className="max-w-lg font-extrabold text-2xl">
          Flexible Pricing Plans to Suit Your Needs
        </h3>
        <p className="max-w-lg">
          Our pricing is based on the package of applications you choose. We
          offer scalable plans to accommodate businesses of all sizes
        </p>
        <div>
          <Button
            endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            className="bg-[#4285Fa] text-white"
          >
            View Pricing Plans
          </Button>
        </div>
      </div>
      <div className="grid w-full gap-4 grid-cols-1 p-8 items-center justify-center">
        <div className="flex items-center justify-between gap-5 rounded-xl border-[#4285fa] border-y-2 border-x-2 bg-white p-8">
          <FontAwesomeIcon className="text-[#4285Fa]" icon={faCheckCircle} />
          <div>
            <h3 className="font-bold">Annual - 2 months free</h3>
            <p>$99/year, thats $8.49/month only</p>
          </div>
          <div>
            <Button
              variant="contained"
              className=" bg-[#4285Fa] text-white rounded-2xl"
              size="small"
            >
              Best Value
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 rounded-xl bg-white p-8">
          <FontAwesomeIcon className="text-[#4285Fa]" icon={faCheckCircle} />
          <div>
            <h3 className="font-bold">Annual - 2 months free</h3>
            <p>$99/year, thats $8.49/month only</p>
          </div>
          <div>
            <Button
              variant="contained"
              className="bg-[#4285Fa] text-white rounded-2xl"
              size="small"
            >
              Best Value
            </Button>
          </div>
        </div>
        <Button
          variant="contained"
          className="bg-[#4285Fa] text-white rounded-2xl"
        >
          Try 7 Days for Free
        </Button>
      </div>
    </div>
  );
};
