import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../services/api.js";

function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await createUser({
        name: formData.get("name"),
        email: formData.get("email"),
        role: formData.get("role"),
      });
      form.reset();
      setSuccess("Your account details have been registered.");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="stakeholder-form auth-form"
      id="signup-form"
      onSubmit={handleSubmit}
    >
      <h2>Create your DevPath account</h2>

      <div className="auth-field">
        <label htmlFor="signup-name">Full name</label>
        <input
          id="signup-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="auth-field">
        <label htmlFor="signup-email">Email address</label>
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="auth-field">
        <label htmlFor="signup-role">I am joining as</label>
        <select
          id="signup-role"
          name="role"
          defaultValue="learner"
          disabled={isSubmitting}
        >
          <option value="learner">Learner</option>
          <option value="mentor">Mentor</option>
          <option value="organization">Organization</option>
        </select>
      </div>

      <label className="checkbox-label" htmlFor="signup-terms">
        <input
          id="signup-terms"
          name="terms"
          type="checkbox"
          required
          disabled={isSubmitting}
        />
        I agree to the terms and privacy policy.
      </label>

      {error && <p className="form-error" role="alert">{error}</p>}
      {success && <p className="form-helper" role="status">{success}</p>}
      <button className="auth-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create account"}
      </button>
      <p className="form-helper">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </form>
  );
}

export default SignupForm;
