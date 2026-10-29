import { Link, useLocation } from "react-router-dom";
import AccountMenu from "./AccountMenu.jsx";
import ExploreMenu from "./ExploreMenu.jsx";
import AccountProfilePanel from "./AccountProfilePanel.jsx";
import FriendsPanel from "./FriendsPanel.jsx";

const sidebarItems = [
  { title: "Activity", icon: ActivityIcon, href: "/account", section: "account" },
  { title: "Profile", icon: UserIcon, href: "/profile", color: "#fbcfe8", section: "profile" },
  { title: "Friends", icon: FriendsIcon, href: "/friends", color: "#bae6fd", section: "friends" },
  { title: "Roadmaps", icon: RoadmapIcon, href: "#continue-following", color: "#bbf7d0" },
  { title: "Road Card", icon: CardIcon, href: "#road-card", color: "#fde68a" },
  { title: "Billing", icon: BillingIcon, href: "#billing", color: "#fed7aa" },
  { title: "Settings", icon: SettingsIcon, href: "/account", color: "#e9d5ff" },
];

const learningStats = [
  { value: "298", label: "Topics Completed", className: "completed" },
  { value: "17", label: "Currently Learning", className: "learning" },
  { value: "2d", label: "Visit Streak", className: "streak" },
];

const continuingRoadmaps = [
  { title: "HTML", href: "/roadmaps/html", progress: 98, color: "#ddd6fe" },
  {
    title: "Frontend Developer Beginner",
    href: "/roadmaps/frontend",
    progress: 22,
    color: "#fbcfe8",
  },
  { title: "Full Stack", href: "/roadmaps/full-stack", progress: 0 },
  { title: "Backend", href: "/roadmaps/backend", progress: 0 },
  { title: "Frontend", href: "/roadmaps/frontend", progress: 0 },
  { title: "DevOps", href: "/roadmaps/devops", progress: 0 },
  { title: "Flutter", href: "/roadmaps/flutter", progress: 1 },
  {
    title: "Shell / Bash",
    href: "/roadmaps/shell-bash",
    progress: 42,
    color: "#fbcfe8",
  },
  {
    title: "Learn Git and GitHub Beginner",
    href: "/roadmaps/git-and-github",
    progress: 26,
    color: "#bae6fd",
  },
  {
    title: "Git and GitHub",
    href: "/roadmaps/git-and-github",
    progress: 3,
    color: "#bbf7d0",
  },
  { title: "JavaScript", href: "/roadmaps/javascript", progress: 12, color: "#fde68a" },
  { title: "CSS", href: "/roadmaps/css", progress: 100, color: "#fed7aa" },
];

function AccountDashboard() {
  const currentPath = useLocation().pathname;
  const isProfilePage = currentPath === "/profile";
  const isFriendsPage = currentPath === "/friends";
  const activeSection = isProfilePage
    ? "profile"
    : isFriendsPage
      ? "friends"
      : "account";

  return (
    <>
      <header className="hero-section account-dashboard-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link className="brand" to="/dashboard" aria-label="DevPath home">
            <img className="brand-logo" src="/logo.png" alt="DevPath" />
          </Link>
          <ExploreMenu />
          <div className="nav-links">
            <Link className="nav-link" to="/dashboard#roadmaps">Roadmaps</Link>
            <Link className="nav-link" to="/dashboard#guides">AI Tutor</Link>
            <Link className="nav-link" to="/dashboard#community">Guides</Link>
            <Link className="nav-link" to="/dashboard#about">Newsletters</Link>
          </div>
          <div className="nav-actions">
            <Link className="nav-search" to="/dashboard#roadmaps">
              <span aria-hidden="true">⌕</span>
              <span className="nav-search-text">Search</span>
              <kbd className="nav-search-kbd">⌘ K</kbd>
            </Link>
            <span className="nav-divider" aria-hidden="true" />
            <Link className="upgrade-link" to="/dashboard#community">
              <span className="upgrade-dot" aria-hidden="true" />
              Upgrade
            </Link>
            <AccountMenu />
          </div>
        </nav>
      </header>
      <main className={`account-dashboard${isFriendsPage ? " account-dashboard-friends" : ""}`}>
        <aside className="account-dashboard-sidebar" aria-label="Account navigation">
          <label className="account-team-label" htmlFor="account-team">
            Choose team
          </label>
          <button className="account-team-select" id="account-team" type="button">
            <span className="account-team-avatar" aria-hidden="true" />
            <span>AbuTalha</span>
            <ChevronDownIcon />
          </button>

          <nav className="account-sidebar-menu" aria-label="Account sections">
            {sidebarItems.map(({ title, icon: Icon, href, color, section }) => (
              <Link
                className={`account-sidebar-item${section === activeSection ? " active" : ""}`}
                key={title}
                to={href}
                aria-current={section === activeSection ? "page" : undefined}
              >
                <span
                  className="account-sidebar-icon"
                  style={{ "--sidebar-icon-bg": color ?? "#ffffff" }}
                  aria-hidden="true"
                >
                  <Icon />
                </span>
                <span>{title}</span>
              </Link>
            ))}
          </nav>

          <Link className="account-sidebar-upgrade" to="/dashboard#community">
            <span className="account-sidebar-upgrade-icon" aria-hidden="true">
              <ZapIcon />
            </span>
            <span>Upgrade</span>
          </Link>
        </aside>

        {isFriendsPage ? (
          <div className="account-dashboard-content">
            <FriendsPanel />
          </div>
        ) : isProfilePage ? (
          <div className="account-dashboard-content">
            <AccountProfilePanel />
          </div>
        ) : (
          <div className="account-dashboard-content">
            <section className="account-stats" aria-label="Learning statistics">
              {learningStats.map(({ value, label, className }) => (
                <article
                  className={`account-stat-card ${className}`}
                  key={label}
                >
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </section>

            <section className="account-activity" id="activity">
              <h1 className="account-section-title" id="continue-following">
                Continue Following
              </h1>
              <div className="account-roadmap-grid">
                {continuingRoadmaps.map(({ title, href, progress, color }) => (
                  <article
                    className="account-roadmap-card"
                    key={title}
                    style={{
                      "--roadmap-progress": `${progress}%`,
                      "--roadmap-progress-color": color ?? "transparent",
                    }}
                  >
                    <Link to={href}>{title}</Link>
                    <span className="account-roadmap-progress">{progress}%</span>
                    <button
                      type="button"
                      className="account-roadmap-more"
                      aria-label={`More options for ${title}`}
                    >
                      <MoreIcon />
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  );
}

function ActivityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}

function FriendsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function RoadmapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
      <path d="M9 3v15M15 6v15" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="9" r="2" />
      <path d="M8 16h8" />
    </svg>
  );
}

function BillingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 16h4" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m13 2-3 8h7l-6 12 1-9H6z" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

export default AccountDashboard;
