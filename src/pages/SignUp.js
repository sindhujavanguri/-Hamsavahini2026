import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    const nextValue = name === "fullName" ? value.replace(/[^A-Za-z\s]/g, "") : value;

    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const submitSignUp = (event) => {
    event.preventDefault();

    const nextErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      nextErrors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      nextErrors.fullName = "Full name can contain alphabets only.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Email address is required.";
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setToastMessage("Account created successfully.");
    window.setTimeout(() => navigate("/home"), 900);
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Register with Hamsavahini School to access parent services"
      toastMessage={toastMessage}
    >
      <form className="auth-form" onSubmit={submitSignUp} noValidate>
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={updateField}
          aria-invalid={Boolean(errors.fullName)}
        />
        {errors.fullName && <p className="auth-error">{errors.fullName}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={updateField}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="auth-error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={updateField}
        />

        <button className="auth-button" type="submit">
          Register
        </button>
      </form>

      <p className="auth-links">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </AuthLayout>
  );
}

export default SignUp;
