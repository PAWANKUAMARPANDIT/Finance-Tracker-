import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import "./style.css"; 

export const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <SignedOut>
          <h1 className="auth-title">
            Welcome to Your Own Personal Finance Tracker!
          </h1>
          <div className="auth-buttons">
            <SignUpButton mode="modal" />
            <SignInButton mode="modal" />
          </div>
        </SignedOut>
        <SignedIn>
          <Navigate to="/" />
        </SignedIn>
      </div>
    </div>
  );
};
