import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";

export const AboutUs = () => {
  return (
    <div className="flex flex-col gap-3 items-center w-full py-12">
      <h3 className="text-indigo-800 rounded-full bg-[#f2f2f2] px-5">
        About us
      </h3>
      <h2 className="text-3xl font-bold">Who We Are</h2>
      <p className="text-base max-w-xl text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        nobis deleniti tenetur, magni quas nam deserunt fugit voluptatibus
        maxime natus totam dolorem aperiam. Exercitationem pariatur quos id
        quibusdam, possimus iste.
      </p>
      <div>
        <Button
          variant="contained"
          className="bg-[#4285Fa]"
          endIcon={<FontAwesomeIcon icon={faArrowRight} />}
        >
          Learn More About Us
        </Button>
      </div>
    </div>
  );
};
