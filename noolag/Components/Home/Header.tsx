import React from "react";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full border px-8 py-7 bg-white">
      <h3 className="text-4xl text-[#4285F4] font-bold">NooLag</h3>
      <ul className="flex justify-between gap-12">
        <li>Products</li>
        <li>Industries</li>
        <li>Support</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <AuthBtn />
    </nav>
  );
};

const AuthBtn = () => {
  return (
    <div className="flex gap-4">
      <Button className="bg-[#4285f4]" variant="contained">
        Sign In
      </Button>
      <Button className="bg-[#4285f4]" variant="contained">
        Register now
      </Button>
    </div>
  );
};
