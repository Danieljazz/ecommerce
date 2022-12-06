import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      navigate("/");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Payment success</h1>
    </div>
  );
};

export default Success;
