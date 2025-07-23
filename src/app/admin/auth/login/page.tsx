"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import img from "../../../../../public/propertyLog.svg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectIsLoggingIn } from "@/lib/features/auth/login/selector";
import { loginActions as actions } from "@/lib/features/auth/login/loginSlice";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Spinner } from "@/components/block/Spinner";
import Link from "next/link";

const Page = () => {
  // For now redirect to dashboard
  // redirect("/admin/dashboard");

  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const isUserLoggingIn = useAppSelector(selectIsLoggingIn);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let valid = true;
    const newError = { email: "", password: "" };

    // Email and password validation
    if (!data.password && !data.email) {
      newError.email = "Email is required";
      newError.password = "Password is required";
      valid = false;
    }
    if (!data.email) {
      newError.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newError.email = "Invalid email format";
      valid = false;
    }

    // Password validation
    if (!data.password) {
      newError.password = "Password is required";
      valid = false;
    } else if (data.password.length < 8) {
      newError.password = "Password must be at least 8 characters";
      valid = false;
    }
    //  else if (!/[0-9]/.test(data.password)) {
    //   newError.password = "Password must include at least one number";
    //   valid = false;
    // } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
    //   newError.password =
    //     "Password must include at least one special character";
    //   valid = false;
    // }

    setError(newError);
    return valid;
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (rememberMe) {
      localStorage.setItem("rememberEmail", data.email);
    } else {
      localStorage.removeItem("rememberEmail");
    }
    dispatch(actions.login(data));
  };

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberEmail");
    if (rememberedEmail) {
      setData((prev) => ({ ...prev, email: rememberedEmail }));
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-16 rounded-lg shadow-md flex flex-col items-center justify-between min-h-[631px] min-w-[640px]">
        <div>
          <Image src={"/logoProperty.svg"} alt="Logo" width={220} height={39} />
        </div>
        <div className="flex flex-col items-center justify-center gap-[6px] ">
          <span className="text-[48px] text-black font-semibold text-center leading-none">
            Welcome Back
          </span>
          <span className="font-open-sans font-normal text-[14px] text-[#474950]">
            Enter your email and password to access dashboard
          </span>
        </div>
        <form
          onSubmit={handleOnSubmit}
          className="w-full flex flex-col   justify-center gap-4"
        >
          <div className="w-[100%]">
            <div className="w-[100%] relative flex items-center">
              <Input
                className="p-6 pl-10 placeholder-[#474950] placeholder:text-sm text-black bg-[#F3F5FF]"
                type="email"
                name="email"
                id="email"
                value={data?.email}
                onChange={handleOnChange}
                placeholder="Enter your email"
              />
              <div className="absolute z-50 left-3">
                <Mail color="#64666D" size={17} fillRule="evenodd" />
              </div>
            </div>
            {error.email && (
              <p className="text-red-500 text-xs mt-1">{error.email}</p>
            )}
          </div>
          <div className=" w-[100%]">
            <div className="w-[100%] relative flex items-center">
              <Input
                className="p-6 pl-10 placeholder-[#474950] placeholder:text-sm text-black bg-[#F3F5FF]"
                type={showPassword ? "text" : "password"}
                name="password"
                value={data?.password}
                id="password"
                onChange={handleOnChange}
                placeholder="Enter your password"
              />
              <div className="absolute z-50 left-3">
                <LockKeyhole color="#64666D" size={19} fillRule="evenodd" />
              </div>
              <div className="absolute z-50 right-3">
                {showPassword ? (
                  <EyeOff
                    onClick={() => setShowPassword(false)}
                    color="#64666D"
                    size={19}
                    fillRule="evenodd"
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPassword(true)}
                    color="#64666D"
                    size={19}
                    fillRule="evenodd"
                  />
                )}
              </div>
            </div>
            {error.password && (
              <p className="text-red-500 text-xs mt-1">{error.password}</p>
            )}
          </div>

          {/* remember me and forgot password */}
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="flex gap-3">
              <Checkbox
                id="terms"
                checked={rememberMe}
                onCheckedChange={() => setRememberMe(!rememberMe)}
              />
              <Label htmlFor="terms" className="text-[#64666D]">
                Remember me
              </Label>
            </div>
            <Link href="/admin/auth/forgot-password">
              <Button variant="link" className="text-[#64666D]">
                Forget password?
              </Button>
            </Link>
          </div>
          <Button
            type="submit"
            disabled={isUserLoggingIn}
            className="w-full bg-[#1C7ED6] p-6 rounded-2xl hover:bg-[#1c7fd6f6] text-white flex justify-center items-center gap-1"
          >
            Sign In
            {isUserLoggingIn && <Spinner />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
