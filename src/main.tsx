import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_DOMAIN;
const clientId = import.meta.env.VITE_CLIENTID;
const reditect = {
  redirect_uri: window.location.origin,
};
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={reditect}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
