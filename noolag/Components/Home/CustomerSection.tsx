import Image from "next/image";
import React from "react";
import customer_img from "@/public/media/meet.jpg";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const CustomerSection = () => {
  return (
    <div className="grid grid-cols-2 gap-10 border w-full py-24 justify-between px-12">
      <div className="w-full max-h-80 rounded-2xl">
        <Image
          className="object-cover rounded-2xl w-full h-full"
          alt="img-customer"
          src={customer_img}
        />
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-base text-blue-700">Customer Support</p>
        <h3 className="font-bold text-4xl">
          Customer Support at Your Fingertips
        </h3>
        <p className="max-w-xl">
          Need assistance? Our dedicated customer support team is here to help.
          Click on the support link to chat with a respresentative or access our
          knowledge base for quick answers to your questions
        </p>
        <div>
          <Button endIcon={<FontAwesomeIcon icon={faArrowRight} />}>
            Reach Customer Support
          </Button>
        </div>
      </div>
    </div>
  );
};
