"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import img from "../../../../../public/propertyLog.svg";

const Page = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-16 rounded-lg shadow-md flex flex-col items-center justify-between min-h-[631px] min-w-[640px]">
        <div>
          <Image src={img} alt="Logo" width={35} height={35} />
        </div>
        <div className="flex flex-col  items-center justify-center gap-[6px] ">
          <span className="text-[48px] text-black font-semibold text-center leading-none">
            Set new password
          </span>
          <span className="font-open-sans max-w-[340px] text-center font-normal text-[14px] text-[#474950]">
            Enter your new password below to secure your account
          </span>
        </div>
        <form
          onSubmit={handleOnSubmit}
          className="w-full flex flex-col items-center justify-center gap-4"
        >
          <div className=" w-[100%]">
            <Input
              className="p-6 placeholder-[#474950] placeholder:text-sm text-black bg-[#F3F5FF"
              type="password"
              id="password"
              onChange={handleOnChange}
              placeholder="New password"
              required
            />
          </div>
          <div className=" w-[100%]">
            <Input
              className="p-6 placeholder-[#474950] placeholder:text-sm text-black bg-[#F3F5FF"
              type="password"
              id="password"
              onChange={handleOnChange}
              placeholder="Confirm password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#1C7ED6] p-6 rounded-2xl hover:bg-[#1c7fd6f6] text-white"
          >
            Finish
          </Button>
        </form>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center w-[100%] gap-1">
            <div className="w-[100%] h-[1px] bg-[#CED2D680]" />
            <span className="text-[#64666D]">Or</span>
            <div className="w-[100%] h-[1px] bg-[#CED2D680]" />
          </div>

          <Button
            type="button"
            className="w-full bg-white p-6 rounded-2xl border-[#CED2D6] border-1 hover:bg-white text-black"
          >
            Back to Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
