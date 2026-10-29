import { useState } from "react";

const progressRoadmaps = [
  "Developer Relations",
  "DevOps",
  "Software Architect",
  "Frontend",
  "Backend",
  "Full Stack",
  "DevSecOps",
  "Vibe Coding",
  "HTML",
  "Frontend Developer Beginner",
  "CSS",
  "JavaScript",
  "Prompt Engineering",
  "Git and GitHub",
  "Learn Git and GitHub Beginner",
  "Shell / Bash",
  "Flutter",
];

function AccountProfilePanel() {
  const [showProgress, setShowProgress] = useState(true);
  const [showAllRoadmaps, setShowAllRoadmaps] = useState(false);
  const [selectedProgressRoadmaps, setSelectedProgressRoadmaps] = useState([]);

  function toggleSelection(setSelection, title) {
    setSelection((selection) =>
      selection.includes(title)
        ? selection.filter((item) => item !== title)
        : [...selection, title],
    );
  }

  function preventSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="account-profile-panel" aria-labelledby="profile-title">
      <header className="account-profile-heading">
        <div>
          <h1 id="profile-title">Skill Profile</h1>
          <p>Create your skill profile to showcase your skills.</p>
        </div>
        <label className="account-profile-visibility">
          <span className="visually-hidden">Profile visibility</span>
          <select defaultValue="Public" aria-label="Profile visibility">
            <option>Public</option>
            <option>Private</option>
          </select>
        </label>
      </header>

      <form className="account-profile-form" onSubmit={preventSubmit}>
        <div className="account-profile-picture-field">
          <span className="account-profile-field-label">Profile picture</span>
          <div className="account-profile-avatar-wrap">
            <div className="account-profile-avatar" aria-label="Profile picture">
              <ProfileAvatarIcon />
            </div>
            <button type="button" className="account-profile-avatar-edit">
              Edit
            </button>
          </div>
        </div>

        <label className="account-profile-field">
          <span>Name<span className="account-profile-required">*</span></span>
          <input type="text" name="name" defaultValue="AbuTalha" required />
        </label>

        <div className="account-profile-email-field">
          <label className="account-profile-field" htmlFor="account-profile-email">
            <span>Email<span className="account-profile-required">*</span></span>
            <input
              id="account-profile-email"
              type="email"
              name="email"
              defaultValue="abutalha.dev70@gmail.com"
              required
            />
          </label>
          <label className="account-profile-email-visibility">
            <input type="checkbox" defaultChecked />
            <span>Show my email on profile</span>
          </label>
        </div>

        <label className="account-profile-field">
          <span>Headline</span>
          <input type="text" name="headline" placeholder="Full Stack Developer" />
        </label>

        <label className="account-profile-field">
          <span>Profile URL</span>
          <span className="account-profile-url-input">
            <span>roadmap.sh/u/</span>
            <input type="text" name="profileSlug" placeholder="johndoe" />
          </span>
        </label>

        <fieldset className="account-profile-picker">
          <legend>
            Which roadmap progresses do you want to show on your profile?
          </legend>
          <div className="account-profile-picker-actions">
            <button
              type="button"
              className={showProgress ? "selected" : ""}
              aria-pressed={showProgress}
              onClick={() => setShowProgress(true)}
            >
              <EyeIcon />
              All Progress
            </button>
            <button
              type="button"
              className={!showProgress ? "selected" : ""}
              aria-pressed={!showProgress}
              onClick={() => setShowProgress(false)}
            >
              <EyeOffIcon />
              Hide my Progress
            </button>
          </div>
          <p>Or select the roadmaps you want to show</p>
          <div className="account-profile-chips">
            {progressRoadmaps.map((title) => (
              <button
                className={
                  selectedProgressRoadmaps.includes(title) ? "selected" : ""
                }
                type="button"
                key={title}
                aria-pressed={selectedProgressRoadmaps.includes(title)}
                onClick={() =>
                  toggleSelection(
                    setSelectedProgressRoadmaps,
                    title,
                  )
                }
              >
                {title}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="account-profile-picker">
          <legend>Pick your custom roadmaps to show on your profile</legend>
          <div className="account-profile-picker-actions">
            <button
              type="button"
              className={showAllRoadmaps ? "selected" : ""}
              aria-pressed={showAllRoadmaps}
              onClick={() => setShowAllRoadmaps(true)}
            >
              <EyeIcon />
              All Roadmaps
            </button>
            <button
              type="button"
              className={!showAllRoadmaps ? "selected" : ""}
              aria-pressed={!showAllRoadmaps}
              onClick={() => setShowAllRoadmaps(false)}
            >
              <EyeOffIcon />
              Hide my Roadmaps
            </button>
          </div>
          <p>Or select the custom roadmaps you want to show</p>
          <div className="account-profile-empty-notice">
            You do not have any custom roadmaps yet.
          </div>
        </fieldset>

        <label className="account-profile-field">
          <span>Github</span>
          <input type="url" name="github" placeholder="https://github.com/username" />
        </label>
        <label className="account-profile-field">
          <span>Twitter</span>
          <input type="url" name="twitter" placeholder="https://twitter.com/username" />
        </label>
        <label className="account-profile-field">
          <span>LinkedIn</span>
          <input
            type="url"
            name="linkedin"
            placeholder="https://www.linkedin.com/in/username/"
          />
        </label>
        <label className="account-profile-field">
          <span>daily.dev</span>
          <input type="url" name="dailyDev" placeholder="https://app.daily.dev/username" />
        </label>
        <label className="account-profile-field">
          <span>Website</span>
          <input type="url" name="website" placeholder="https://example.com" />
        </label>

        <label className="account-profile-hire">
          <input type="checkbox" name="availableForHire" />
          <span>Available for Hire</span>
        </label>
        <button className="account-profile-save" type="submit">
          Save Profile
        </button>
      </form>
    </section>
  );
}

function ProfileAvatarIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="profile-avatar-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="0.52" stopColor="#ec4899" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill="url(#profile-avatar-gradient)" />
      <circle cx="32" cy="24" r="11" fill="#f2effe" opacity="0.88" />
      <path d="M11 57c2-12 10-18 21-18s19 6 21 18" fill="#f2effe" opacity="0.88" />
      <path d="M9 15 26 8l-8 16-9 4zM43 8l12 8-7 5z" fill="#bef264" opacity="0.9" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
      <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-3.1 3.8M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7a10 10 0 0 0 4-.8" />
    </svg>
  );
}

export default AccountProfilePanel;
