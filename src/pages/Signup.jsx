import React from "react";
import { SignupForm } from "../components"; // ✅ named import
function Signup() {
    return (
        <div className="py-8">
            <SignupForm />
        </div>
    );
}
export default Signup;
