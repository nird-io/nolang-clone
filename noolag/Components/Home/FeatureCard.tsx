import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";

export const FeatureCard = () => {
  return (
    <div className="flex flex-col gap-3 items-center w-full py-12">
      <h3 className="text-indigo-800 rounded-full bg-[#f2f2f2] px-5">
        Features
      </h3>
      <h2 className="text-2xl font-bold">
        Transform Your Business with Our Comprehensive Applications
      </h2>
      <p className="text-base max-w-md text-center">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users
      </p>
      <Button
        variant="contained"
        className="bg-blue-600"
        endIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        Expolore All APplications
      </Button>
    </div>
  );
};
