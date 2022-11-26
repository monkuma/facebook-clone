import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <Image
        src="https://cdn.cdnlogo.com/logos/f/23/facebook.svg"
        height={240}
        width={240}
      />
      <a
        onClick={signIn}
        className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-15 bg-blue-500 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
