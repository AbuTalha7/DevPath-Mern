import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema: email must be a valid email, password must be at least 8 characters.
const loginSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Replace this with your real API call when you have a backend.
  function onSubmit(data) {
    console.log("Login submitted:", data);
  }

  return (
    <form className="stakeholder-form auth-form" id="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Welcome back</h2>

      <div className="auth-field">
        <label htmlFor="login-email">Email address</label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "login-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && <span className="form-error" id="login-email-error">{errors.email.message}</span>}
      </div>

      <div className="auth-field">
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "login-password-error" : undefined}
          {...register("password")}
        />
        {errors.password && <span className="form-error" id="login-password-error">{errors.password.message}</span>}
      </div>

      <button className="auth-submit" type="submit">Log in</button>
      <p className="form-helper">
        <Link to="/forgot-password">Forgot your password?</Link>
      </p>
      <p className="form-helper">
        New to DevPath? <Link to="/signup">Create an account</Link>
      </p>
    </form>
  );
}

export default LoginForm;
