import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <section className="stakeholder-form auth-form" id="login-form">
      <h2>Welcome back</h2>
      <p className="form-helper">
        Password login is not available yet. You can create an account to
        register your details.
      </p>
      <p className="form-helper">
        <Link to="/signup">Create an account</Link>
      </p>
    </section>
  );
}

export default LoginForm;
