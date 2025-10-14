import React from "react";
import CartImage from "../../public/CartImage.png";
import Image from "next/image";

export default function Login() {
  return (
    <section className="h-[100vh]  bg-[]">
      <form
        action=""
        className="flex justify-center items-center w-[60%] h-[70%] m-auto"
      >
        <Image
          src={CartImage}
          width="124"
          height="102"
          alt="cart image"
          className="block w-[400px]"
        />
        <div>
          <label htmlFor="username ">Username:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" />
        </div>
      </form>
    </section>
  );
}
