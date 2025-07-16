"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import { loginActions as actions } from "@/lib/features/login/loginSlice";
import { selecIsLoggingIn } from "@/lib/features/login/selector";

const Page = () => {
  const dispatch = useAppDispatch();
  const isUserLoggingIn = useAppSelector(selecIsLoggingIn);
  const handleClick = () => {
    dispatch(actions.login());
  };

  return (
    <div>
      <span>login page</span>
      <div>
        <button className="bg-amber-300 mt-2" onClick={handleClick}>
          click me
        </button>
        <span>{isUserLoggingIn ? "true" : "false"}</span>
      </div>
    </div>
  );
};

export default Page;
