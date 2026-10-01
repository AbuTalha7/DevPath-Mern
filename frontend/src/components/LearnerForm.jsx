function LearnerForm() {
  return (
    <form className="stakeholder-form" id="learner-form">
      <h2>Learner registration</h2>
      <label htmlFor="learner-name">Full name</label>
      <input id="learner-name" name="name" type="text" required />
      <label htmlFor="learner-email">Email address</label>
      <input id="learner-email" name="email" type="email" required />
      <label htmlFor="learner-goal">Learning goal</label>
      <textarea id="learner-goal" name="goal" rows="4" />
      <button type="submit">Create learner profile</button>
    </form>
  )
}

export default LearnerForm
