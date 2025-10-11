import React from "react";
import { SpotifyIcon } from "../icons/icons";

const Login = () => {
  return (
    <div className="max-w-[734px] w-full flex items-center justify-center mx-auto my-7 text-white rounded-lg bg-gradient-to-b bg-[#121212] pt-9 pb-3">
      <div className="flex flex-col items-center justify-center">
        <div>
          <SpotifyIcon className="w-9 h-9" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Welcome back</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
