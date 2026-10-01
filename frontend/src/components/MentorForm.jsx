function MentorForm() {
  return (
    <form className="stakeholder-form" id="mentor-form">
      <h2>Mentor application</h2>
      <label htmlFor="mentor-name">Full name</label>
      <input id="mentor-name" name="name" type="text" required />
      <label htmlFor="mentor-email">Email address</label>
      <input id="mentor-email" name="email" type="email" required />
      <label htmlFor="mentor-specialty">Area of expertise</label>
      <input id="mentor-specialty" name="specialty" type="text" required />
      <label htmlFor="mentor-bio">Short bio</label>
      <textarea id="mentor-bio" name="bio" rows="4" />
      <button type="submit">Apply as mentor</button>
    </form>
  )
}

export default MentorForm
