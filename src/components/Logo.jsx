import React from "react";
import reactLogo from "../assets/react.svg"; // adjust path if needed

function Logo({ width = "100px" }) {
    return <img src={reactLogo} alt="React Logo" style={{ width }} />;
}

export default Logo;
