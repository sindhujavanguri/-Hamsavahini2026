import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  const submitSignIn = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!emailPattern.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setToastMessage("Signed in successfully.");
    window.setTimeout(() => navigate("/home"), 900);
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue to Hamsavahini School"
      toastMessage={toastMessage}
    >
      <form className="auth-form" onSubmit={submitSignIn} noValidate>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrors((current) => ({ ...current, email: "" }));
          }}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="auth-error">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          className="auth-button"
          type="submit"
        >
          Sign In
        </button>
      </form>

      <p className="auth-links">
          <Link to="/forgot">Forgot Password?</Link>
      </p>

      <p className="auth-links">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
      </p>
    </AuthLayout>
  );
}

export default SignIn;
