function OrganizationForm() {
  return (
    <form className="stakeholder-form" id="organization-form">
      <h2>Organization partnership</h2>
      <label htmlFor="organization-name">Organization name</label>
      <input id="organization-name" name="organization" type="text" required />
      <label htmlFor="organization-contact">Contact email</label>
      <input id="organization-contact" name="email" type="email" required />
      <label htmlFor="organization-interest">Partnership interest</label>
      <textarea id="organization-interest" name="interest" rows="4" />
      <button type="submit">Contact DevPath</button>
    </form>
  )
}

export default OrganizationForm
