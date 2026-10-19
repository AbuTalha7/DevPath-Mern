function AuthLayout({ children, pageLabel }) {
  return (
    <main className="auth-page auth-layout">
      <aside className="auth-brand-panel">
        <span className="auth-brand-label">{pageLabel}</span>
        <div className="auth-brand-message">
          <div className="auth-illustration" aria-hidden="true">
            <div className="auth-illustration-card auth-illustration-frontend">
              <strong>Frontend</strong>
              <span>Role-based roadmap</span>
            </div>
            <div className="auth-illustration-card auth-illustration-ai">
              <strong>Learn with AI</strong>
              <span>Personal AI tutor</span>
            </div>
            <div className="auth-illustration-card auth-illustration-python">
              <strong>Python</strong>
              <span>Skill-based roadmap</span>
            </div>
          </div>
          <h1>Keep moving, together.</h1>
        </div>
        <div className="auth-community-stats" aria-label="DevPath community statistics">
          <div>
            <strong>369K</strong>
            <span>learners exploring</span>
          </div>
          <div>
            <strong>3.2M</strong>
            <span>lessons completed</span>
          </div>
          <div>
            <strong>52K</strong>
            <span>members connected</span>
          </div>
        </div>
      </aside>
      <section className="auth-form-panel">{children}</section>
    </main>
  );
}

export default AuthLayout;
