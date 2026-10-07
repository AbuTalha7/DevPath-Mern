import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", to: "/admin", end: true },
  { label: "User Management", to: "/admin/users" },
  { label: "Learners", to: "/admin/learners" },
  { label: "Mentors", to: "/admin/mentors" },
  { label: "Organizations", to: "/admin/organizations" },
  { label: "Roadmaps", to: "/admin/roadmaps" },
  { label: "Guides & Courses", to: "/admin/content" },
  { label: "Approvals", to: "/admin/approvals" },
  { label: "Reports & Analytics", to: "/admin/reports" },
  { label: "Settings", to: "/admin/settings" },
];

function AdminDashboard() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <img src="/logo.png" alt="DevPath" />
          <span>Admin</span>
        </div>
        <nav aria-label="Admin dashboard">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "admin-nav-link active" : "admin-nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink className="admin-back-link" to="/">
          ← Back to site
        </NavLink>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

const pageContent = {
  users: {
    eyebrow: "USER MANAGEMENT",
    title: "Manage users",
    description: "Create, search, edit, and manage every account on DevPath.",
    action: "Add user",
    columns: ["Name", "Email", "Role", "Status", "Actions"],
    rows: [
      ["Alex Morgan", "alex@example.com", "Learner", "Active"],
      ["Samira Khan", "samira@example.com", "Mentor", "Active"],
      ["Northstar Labs", "hello@northstar.dev", "Organization", "Pending"],
    ],
  },
  learners: {
    eyebrow: "LEARNERS",
    title: "Learner accounts",
    description: "Review learner activity and progress across every roadmap.",
    action: "Add learner",
    columns: ["Name", "Roadmap", "Progress", "Last active", "Actions"],
    rows: [
      ["Alex Morgan", "Frontend", "68%", "Today"],
      ["Maya Patel", "Data Analyst", "42%", "Yesterday"],
      ["Owen Brooks", "Backend", "81%", "3 days ago"],
    ],
  },
  mentors: {
    eyebrow: "MENTORS",
    title: "Mentor accounts",
    description: "Manage mentors and review their availability and expertise.",
    action: "Add mentor",
    columns: ["Name", "Specialty", "Availability", "Status", "Actions"],
    rows: [
      ["Samira Khan", "Frontend", "Available", "Active"],
      ["Daniel Reed", "DevOps", "Busy", "Active"],
      ["Priya Shah", "Data Science", "Review", "Pending"],
    ],
  },
  organizations: {
    eyebrow: "ORGANIZATIONS",
    title: "Organization accounts",
    description: "Manage companies and teams using DevPath for learning.",
    action: "Add organization",
    columns: ["Organization", "Email", "Members", "Status", "Actions"],
    rows: [
      ["Northstar Labs", "hello@northstar.dev", "24", "Pending"],
      ["Brightline Studio", "team@brightline.dev", "18", "Active"],
      ["Orbit Systems", "people@orbit.io", "42", "Active"],
    ],
  },
  roadmaps: {
    eyebrow: "ROADMAPS",
    title: "Roadmap library",
    description: "Create and maintain the learning paths shown on DevPath.",
    action: "Add roadmap",
    columns: ["Title", "Category", "Learners", "Status", "Actions"],
    rows: [
      ["Frontend", "Role-based", "12,480", "Published"],
      ["Python", "Skill-based", "9,210", "Published"],
      ["AI Engineer", "Role-based", "4,805", "Draft"],
    ],
  },
  content: {
    eyebrow: "GUIDES & COURSES",
    title: "Content library",
    description: "Manage guides, lesson packs, and educational resources.",
    action: "Add content",
    columns: ["Title", "Type", "Author", "Status", "Actions"],
    rows: [
      ["Environment variables in Python", "Guide", "DevPath Team", "Published"],
      ["Open-source contribution", "Lesson pack", "Samira Khan", "Review"],
      ["Website request lifecycle", "Deep dive", "DevPath Team", "Draft"],
    ],
  },
};

function AdminTablePage({ section }) {
  const content = pageContent[section];

  return (
    <>
      <AdminHeader
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        action={content.action}
      />
      <section className="admin-panel">
        <div className="admin-toolbar">
          <input type="search" placeholder={`Search ${content.title.toLowerCase()}`} />
          <button className="admin-button secondary" type="button">
            Filter
          </button>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                {content.columns.map((column) => <th key={column}>{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${cell}`}>
                      {index === row.length - 1 ? (
                        <span className="admin-status">{cell}</span>
                      ) : cell}
                    </td>
                  ))}
                  <td>
                    <button className="admin-table-action" type="button">Edit</button>
                    <button className="admin-table-action" type="button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function AdminHeader({ eyebrow, title, description, action }) {
  return (
    <header className="admin-page-header">
      <div>
        <p className="admin-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action && <button className="admin-button primary" type="button">{action}</button>}
    </header>
  );
}

function AdminHome() {
  const stats = [
    ["369K", "Total learners"],
    ["1,248", "Active mentors"],
    ["284", "Organizations"],
    ["18", "Pending approvals"],
  ];

  return (
    <>
      <AdminHeader
        eyebrow="OVERVIEW"
        title="Welcome back, Admin"
        description="Here is what is happening across the DevPath platform."
      />
      <section className="admin-stats">
        {stats.map(([value, label]) => (
          <article className="admin-stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>
      <section className="admin-panel admin-overview-grid">
        <div>
          <h2>Recent activity</h2>
          <ul className="admin-activity-list">
            <li><strong>Northstar Labs</strong> submitted an organization request.</li>
            <li><strong>Priya Shah</strong> submitted a mentor application.</li>
            <li><strong>Python roadmap</strong> received 120 new learners.</li>
          </ul>
        </div>
        <div>
          <h2>Quick actions</h2>
          <div className="admin-quick-links">
            <NavLink to="/admin/users">Manage users</NavLink>
            <NavLink to="/admin/approvals">Review approvals</NavLink>
            <NavLink to="/admin/roadmaps">Edit roadmaps</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

function AdminApprovals() {
  return (
    <>
      <AdminHeader
        eyebrow="APPROVALS"
        title="Review approvals"
        description="Review new accounts and content before they appear publicly."
      />
      <section className="admin-approval-grid">
        {["Mentor applications", "Organization requests", "Content reviews"].map((title, index) => (
          <article className="admin-panel admin-approval-card" key={title}>
            <span className="admin-count">{[6, 4, 8][index]}</span>
            <h2>{title}</h2>
            <p>Items are waiting for an administrator decision.</p>
            <button className="admin-button secondary" type="button">Review queue</button>
          </article>
        ))}
      </section>
    </>
  );
}

function AdminReports() {
  return (
    <>
      <AdminHeader
        eyebrow="REPORTS & ANALYTICS"
        title="Platform analytics"
        description="Track engagement, growth, and learning activity."
        action="Export report"
      />
      <section className="admin-panel">
        <h2>Learning activity</h2>
        <div className="admin-report-bars">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
            <div key={month}><span style={{ height: `${35 + index * 10}%` }} /><small>{month}</small></div>
          ))}
        </div>
      </section>
    </>
  );
}

function AdminSettings() {
  return (
    <>
      <AdminHeader eyebrow="SETTINGS" title="Admin settings" description="Manage your administrator profile and platform preferences." />
      <section className="admin-panel admin-settings-form">
        <h2>Profile settings</h2>
        <label htmlFor="admin-name">Display name</label>
        <input id="admin-name" defaultValue="DevPath Admin" />
        <label htmlFor="admin-email">Email address</label>
        <input id="admin-email" type="email" defaultValue="admin@devpath.dev" />
        <button className="admin-button primary" type="button">Save changes</button>
      </section>
    </>
  );
}

export { AdminDashboard, AdminHome, AdminApprovals, AdminReports, AdminSettings, AdminTablePage };
