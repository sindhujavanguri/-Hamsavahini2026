import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const submitReset = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email address is required.");
      setSuccessMessage("");
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError("Enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    setError("");
    setSuccessMessage("Reset link successfully sent to your mail.");
    setToastMessage("Reset link successfully sent to your mail.");
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your registered email for Hamsavahini School account support"
      toastMessage={toastMessage}
    >
      <form className="auth-form" onSubmit={submitReset} noValidate>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
            setSuccessMessage("");
            setToastMessage("");
          }}
          aria-invalid={Boolean(error)}
        />
        {error && <p className="auth-error">{error}</p>}
        <button className="auth-button" type="submit">Send Reset Link</button>
        {successMessage && <p className="auth-success-message">{successMessage}</p>}
      </form>

      <p className="auth-links">
        <Link to="/login">Back to Sign In</Link>
      </p>
    </AuthLayout>
  );
}

export default Forgot;
