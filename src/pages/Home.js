import React from "react";
import { Navigate } from "react-router-dom";

function Home() {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    // Redirect to Sign In if not authenticated
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <h1>SPS REACT TEST</h1>
      <a href="/users">Usuários</a>
    </div>
  );
}

export default Home;
