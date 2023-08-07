import { Button } from "@mui/material";
import React from "react";
import hero_img from "@/public/media/hero.webp";
import Image from "next/image";

export const Hero = () => {
  return (
    <div
      className={`flex text-white flex-col items-center justify-center w-full p-24 gap-8 h-[50rem] bg-[url(/media/hero.jpeg)]  bg-no-repeat bg-center bg-cover`}
    >
      <h1 className="max-w-5xl p-4 text-5xl text-center font-extrabold">
        Supercharge Your Business Productivity with Noolag
      </h1>
      <p className="max-w-3xl text-center">
        Welcome to Noolag, your one-stop solution for Enterprise Resource
        Planning Software as a service(Saas). We empower businesses of all sizes
        with a range of cutting-edge applications to help you power your
        business online and drive growth
      </p>
      <div className="flex gap-7">
        <Button className="bg-[#4285F4]" variant="contained">
          Get Started
        </Button>
        <Button className="text-white" variant="outlined">
          Learn More
        </Button>
      </div>
    </div>
  );
};
