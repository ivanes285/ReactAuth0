import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
export interface LogoutInterface {}

const Logout: React.FC<LogoutInterface> = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="w-64 bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-8 rounded-lg">
      Logout
    </button>
  );
};

export default Logout;
