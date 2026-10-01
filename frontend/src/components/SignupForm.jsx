function SignupForm() {
  return (
    <form className="stakeholder-form" id="signup-form">
      <h2>Create your DevPath account</h2>
      <label htmlFor="signup-name">Full name</label>
      <input id="signup-name" name="name" type="text" autoComplete="name" required />
      <label htmlFor="signup-email">Email address</label>
      <input id="signup-email" name="email" type="email" autoComplete="email" required />
      <label htmlFor="signup-password">Password</label>
      <input id="signup-password" name="password" type="password" autoComplete="new-password" required />
      <label htmlFor="signup-confirm-password">Confirm password</label>
      <input id="signup-confirm-password" name="confirmPassword" type="password" autoComplete="new-password" required />
      <label htmlFor="signup-role">I am joining as</label>
      <select id="signup-role" name="role" defaultValue="learner" required>
        <option value="learner">Learner</option>
        <option value="mentor">Mentor</option>
        <option value="organization">Organization</option>
      </select>
      <label className="checkbox-label" htmlFor="signup-terms">
        <input id="signup-terms" name="terms" type="checkbox" required />
        I agree to the terms and privacy policy.
      </label>
      <button type="submit">Create account</button>
    </form>
  )
}

export default SignupForm
