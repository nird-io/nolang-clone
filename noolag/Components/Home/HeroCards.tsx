import { faArrowRight, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";

export const HeroCards = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-center items-center px-24 gap-6 py-12">
      <div className="flex max-w-sm gap-4 items-center flex-col  p-4 rounded-2xl  shadow-lg">
        <FontAwesomeIcon className="text-3xl" icon={faMailBulk} />
        <h3 className="text-lg font-bold text-center">Share team inboxes</h3>
        <p className="text-center text-sm">
          Whether you have a team of 2 or 200, our shared team inboxes keep
          everyone on the same page and in the loop.
        </p>
        <Button endIcon={<FontAwesomeIcon icon={faArrowRight} />}>
          Learn More
        </Button>
      </div>
      <div className="flex max-w-sm gap-4 items-center flex-col  p-4 rounded-2xl  shadow-lg">
        <FontAwesomeIcon className="text-3xl" icon={faMailBulk} />
        <h3 className="text-lg font-bold text-center">Share team inboxes</h3>
        <p className="text-center text-sm">
          Whether you have a team of 2 or 200, our shared team inboxes keep
          everyone on the same page and in the loop.
        </p>
        <Button endIcon={<FontAwesomeIcon icon={faArrowRight} />}>
          Learn More
        </Button>
      </div>
      <div className="flex max-w-sm gap-4 items-center flex-col  p-4 rounded-2xl  shadow-lg">
        <FontAwesomeIcon className="text-3xl" icon={faMailBulk} />
        <h3 className="text-lg font-bold text-center">Share team inboxes</h3>
        <p className="text-center text-sm">
          Whether you have a team of 2 or 200, our shared team inboxes keep
          everyone on the same page and in the loop.
        </p>
        <Button endIcon={<FontAwesomeIcon icon={faArrowRight} />}>
          Learn More
        </Button>
      </div>
      <div className="flex max-w-sm gap-4 items-center flex-col  p-4 rounded-2xl  shadow-lg">
        <FontAwesomeIcon className="text-3xl" icon={faMailBulk} />
        <h3 className="text-lg font-bold text-center">Share team inboxes</h3>
        <p className="text-center text-sm">
          Whether you have a team of 2 or 200, our shared team inboxes keep
          everyone on the same page and in the loop.
        </p>
        <Button endIcon={<FontAwesomeIcon icon={faArrowRight} />}>
          Learn More
        </Button>
      </div>
    </div>
  );
};
