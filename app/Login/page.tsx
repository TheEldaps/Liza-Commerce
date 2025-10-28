"use client";

import React from "react";
import CartImage from "../../public/CartImage.png";
import Image from "next/image";
import Link from "next/link";
import UsernameIcon from "../../public/UsernameIcon.png";
import PasswordIcon from "../../public/PasswordIcon.png";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState("Login");

  return (
    <section className="flex items-center h-[100vh] bg-[#2418c0] bg-[url('/LoginBackgroundDecore.png')] bg-no-repeat bg-cover bg-center">
      <form
        action=""
        className="flex flex-col justify-center items-center w-[80%] h-[70%] m-auto"
      >
        <Image
          src={CartImage}
          width="124"
          height="102"
          alt="cart image"
          className="block w-[30%] max-w-[120px]  h-auto mb-[50px]"
        />

        {form === "Login" && (
          // FORM APPEARANCE FOR LOG IN
          <div className="w-[50%] max-w-[300px]">
            <div className="flex min-w-[60%] gap-3 mb-[15px] border border-white p-[7px] items-center rounded-sm hover:border-[#e3d2d2cd]">
              <Image
                src={UsernameIcon}
                width="20"
                height="20"
                alt="Password Icon"
                className="w-[15px] h-[15px] max-w-[50px]"
              />
              <input
                type="text"
                id="username"
                className="w-[60%] h-auto outline-0 text-[0.7rem] text-[white] font-[montserrat] flex-1"
                placeholder="USERNAME"
              />
            </div>

            <div className="flex min-w-[60%] gap-3 border border-white p-[7px] items-center rounded-sm hover:border-[#e3d2d2cd] mb-[35px]">
              <Image
                src={PasswordIcon}
                width="20"
                height="20"
                alt="Username Icon"
              />
              <input
                type="password"
                id="password"
                className="w-[60%] h-auto outline-0 text-[0.7rem] text-[white] font-[montserrat] flex-1"
                placeholder="PASSWORD"
              />
            </div>

            <Link href="/">
              <button className="bg-[white] text-[#2418c0] shadow-black shadow-sm block text-[0.8rem] w-[100%] py-[8px] font-[montserrat] font-medium rounded-sm mb-[5px] cursor-pointer hover:bg-[#2418c0] hover:text-[white]">
                LOGIN
              </button>
            </Link>
            <button
              onClick={() => {
                setForm("forgot password");
              }}
              className="text-right block text-[0.8rem] font-[montserrat] text-[white] hover:text-[#e3d2d2cd] cursor-pointer"
            >
              Forgot password?
            </button>

            <div className="mt-[20px]">
              <span className="text-white text-[0.8rem] font-[montserrat] ">
                Don&apos;t have an account?
              </span>

              <button
                onClick={() => {
                  setForm("create account");
                }}
                className="text-right sm:inline-block sm:ml-[10px] block text-[0.8rem] font-[montserrat] text-[white] hover:text-[#e3d2d2cd] cursor-pointer"
              >
                Create Account
              </button>
            </div>
          </div>
        )}
        {form === "create account" && (
          // FORM APPEARANCE FOR CREATE ACCOUNT STATE
          <div>
            <div className="flex min-w-[60%] gap-3 mb-[15px] border border-white p-[7px] items-center rounded-sm hover:border-[#e3d2d2cd]">
              <Image
                src={UsernameIcon}
                width="20"
                height="20"
                alt="Password Icon"
                className="w-[15px] h-[15px] max-w-[50px]"
              />
              <input
                type="text"
                id="username"
                className="w-[60%] h-auto outline-0 text-[0.7rem] text-[white] font-[montserrat] flex-1"
                placeholder="USERNAME"
              />
            </div>
            <div className="flex min-w-[60%] gap-3 border border-white p-[7px] items-center rounded-sm hover:border-[#e3d2d2cd] mb-[35px]">
              <Image
                src={PasswordIcon}
                width="20"
                height="20"
                alt="Username Icon"
              />
              <input
                type="password"
                id="password"
                className="w-[60%] h-auto outline-0 text-[0.7rem] text-[white] font-[montserrat] flex-1"
                placeholder="PASSWORD"
              />
            </div>
            <button className="bg-[white] text-[#2418c0] shadow-black shadow-sm block text-[0.8rem] w-[100%] py-[8px] font-[montserrat] font-medium rounded-sm mb-[5px] cursor-pointer hover:bg-[#2418c0] hover:text-[white]">
              Create Account
            </button>

            <p className="font-[montserrat] text-[white] text-[0.8rem]  mt-[10px]">
              Have an account?
              <button
                onClick={() => {
                  setForm("Login");
                }}
                className="ml-[10px] hover:text-[#e3d2d2cd] cursor-pointer"
              >
                Log in
              </button>
            </p>
          </div>
        )}

        {form === "forgot password" && (
          <div className="text-white text-[0.8rem] font-[montserrat]">
            <h2 className="text-[1rem] mb-[40px] text-center">
              Forgot password
            </h2>
            <div className="flex min-w-[60%] gap-3 mb-[5px] border border-white p-[7px] items-center rounded-sm hover:border-[#e3d2d2cd]">
              <Image
                src={UsernameIcon}
                width="20"
                height="20"
                alt="Username icon"
                className="w-[15px] h-[15px] max-w-[50px]"
              />
              <input
                type="text"
                id="username"
                className="w-[60%] h-auto outline-0 text-[0.7rem] text-[white] font-[montserrat] flex-1"
                placeholder="Enter your email address"
              />
            </div>

            <p className="text-[0.5rem] mb-[20px]">
              Enter your registration email for a password reset link to be sent
              to you
            </p>

            <button className="bg-[white] text-[#2418c0] shadow-black shadow-sm block text-[0.8rem] px-[20px] py-[8px] font-[montserrat] font-medium rounded-sm mb-[20px] mx-auto cursor-pointer hover:bg-[#2418c0] hover:text-[white]">
              Reset Password
            </button>

            <button
              onClick={() => {
                setForm("Login");
              }}
              className="text-right hover:text-[#e3d2d2cd] cursor-pointer block"
            >
              Log in
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
