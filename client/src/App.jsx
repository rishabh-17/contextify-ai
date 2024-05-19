import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
    <GoogleOAuthProvider clientId="355279814554-it9r93p3kcd9565hj425ahdse2o7k42v.apps.googleusercontent.com">
      <Router>
        <Routes />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
