import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

export interface ProfileInterface {}

const Profile: React.FC<ProfileInterface> = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="flex flex-col text-slate-900 text-xl text-center font-medium items-center">
      {isAuthenticated && (
        <>
          <img className="w-28" src={user?.picture} alt={user?.name} />
          <h2>{user!.name}</h2>

          <p>{user!.email}</p>

          <JSONPretty data={user} />
        </>
      )}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default Profile;
