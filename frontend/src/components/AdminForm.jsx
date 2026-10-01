function AdminForm() {
  return (
    <form className="stakeholder-form" id="admin-form">
      <h2>Administrator sign in</h2>
      <label htmlFor="admin-email">Email address</label>
      <input id="admin-email" name="email" type="email" required />
      <label htmlFor="admin-password">Password</label>
      <input id="admin-password" name="password" type="password" required />
      <button type="submit">Sign in</button>
    </form>
  )
}

export default AdminForm
