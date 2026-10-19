import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for the signup form.
const signupSchema = z
  .object({
    name: z.string().trim().min(2, "Full name must be at least 2 characters"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    role: z.enum(["learner", "mentor", "organization"], {
      error: "Please select a role",
    }),
    terms: z.literal(true, {
      error: "You must agree to the terms and privacy policy",
    }),
  })
  // Check that password and confirmPassword match.
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  // Replace this with your real API call when you have a backend.
  function onSubmit(data) {
    console.log("Signup submitted:", data);
  }

  return (
    <form
      className="stakeholder-form auth-form"
      id="signup-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Create your DevPath account</h2>

      <div className="auth-field">
        <label htmlFor="signup-name">Full name</label>
        <input
          id="signup-name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "signup-name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <span className="form-error" id="signup-name-error">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="auth-field">
        <label htmlFor="signup-email">Email address</label>
        <input
          id="signup-email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "signup-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <span className="form-error" id="signup-email-error">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="auth-field">
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          autoComplete="new-password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={
            errors.password ? "signup-password-error" : undefined
          }
          {...register("password")}
        />
        {errors.password && (
          <span className="form-error" id="signup-password-error">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="auth-field">
        <label htmlFor="signup-confirm-password">Confirm password</label>
        <input
          id="signup-confirm-password"
          type="password"
          autoComplete="new-password"
          aria-invalid={Boolean(errors.confirmPassword)}
          aria-describedby={
            errors.confirmPassword ? "signup-confirm-password-error" : undefined
          }
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="form-error" id="signup-confirm-password-error">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className="auth-field">
        <label htmlFor="signup-role">I am joining as</label>
        <select
          id="signup-role"
          defaultValue="learner"
          aria-invalid={Boolean(errors.role)}
          aria-describedby={errors.role ? "signup-role-error" : undefined}
          {...register("role")}
        >
          <option value="learner">Learner</option>
          <option value="mentor">Mentor</option>
          <option value="organization">Organization</option>
        </select>
        {errors.role && (
          <span className="form-error" id="signup-role-error">
            {errors.role.message}
          </span>
        )}
      </div>

      <label className="checkbox-label" htmlFor="signup-terms">
        <input
          id="signup-terms"
          type="checkbox"
          aria-invalid={Boolean(errors.terms)}
          aria-describedby={errors.terms ? "signup-terms-error" : undefined}
          {...register("terms")}
        />
        I agree to the terms and privacy policy.
      </label>
      {errors.terms && (
        <span className="form-error" id="signup-terms-error">
          {errors.terms.message}
        </span>
      )}

      <button className="auth-submit" type="submit">
        Create account
      </button>
      <p className="form-helper">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      <p className="form-helper">
        <Link to="/profile/setup">Complete your profile</Link>
      </p>
      <p className="form-helper">
        Joining as a mentor? <Link to="/mentor/apply">Apply here</Link>
        {" · "}
        Joining as an organization?{" "}
        <Link to="/organization/setup">Set it up</Link>
      </p>
    </form>
  );
}

export default SignupForm;
