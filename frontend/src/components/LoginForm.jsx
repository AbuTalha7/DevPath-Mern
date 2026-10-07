import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <form className="stakeholder-form" id="login-form">
      <h2>Log in to DevPath</h2>
      <label htmlFor="login-email">Email address</label>
      <input id="login-email" name="email" type="email" autoComplete="email" required />
      <label htmlFor="login-password">Password</label>
      <input id="login-password" name="password" type="password" autoComplete="current-password" required />
      <button type="submit">Log in</button>
      <p className="form-helper">
        New to DevPath? <Link to="/signup">Create an account</Link>
      </p>
    </form>
  );
}

export default LoginForm;
