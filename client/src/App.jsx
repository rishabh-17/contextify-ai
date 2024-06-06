import React, { useState, createContext } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Loader from "./components/Loader"

export const LoadingContext = createContext()

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <GoogleOAuthProvider clientId="355279814554-it9r93p3kcd9565hj425ahdse2o7k42v.apps.googleusercontent.com">
      <LoadingContext.Provider value={setLoading}>
      {loading && <Loader />}
      <div className={loading?"h-screen overflow-hidden":""}>
      <Router>
        <Routes />
      </Router>
      </div>
      </LoadingContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
