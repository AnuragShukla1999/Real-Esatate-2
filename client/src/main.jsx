import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from '@mantine/core';

import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Auth0Provider
        domain="dev-xp4l2lgqty288ud7.us.auth0.com"
        clientId="aw3ys3N5AD65zNHztEDU3JWLSMdPVUSQ"
        authorizationParams={{
          redirect_uri: "http://localhost:5173"
        }}
        audience="http://localhost:5000"
        scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);
