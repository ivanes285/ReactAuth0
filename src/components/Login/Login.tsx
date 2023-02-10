import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="w-64 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-lg ">
      Login
    </button>
  );
};

export default Login;
