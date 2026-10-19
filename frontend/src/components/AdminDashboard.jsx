import { Link, Outlet, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const adminSettingsSchema = z.object({
  name: z.string().trim().min(2, "Display name must be at least 2 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

const adminNavigationItems = [
  ["/admin", "Dashboard"],
  ["/admin/users", "User Management"],
  ["/admin/learners", "Learners"],
  ["/admin/mentors", "Mentors"],
  ["/admin/organizations", "Organizations"],
  ["/admin/roadmaps", "Roadmaps"],
  ["/admin/content", "Guides & Courses"],
  ["/admin/approvals", "Approvals"],
  ["/admin/reports", "Reports & Analytics"],
  ["/admin/settings", "Settings"],
];

function SettingsFieldError({ error }) {
  return error ? (
    <span className="form-error" role="alert">
      {error.message}
    </span>
  ) : null;
}

function AdminDashboard() {
  const { pathname } = useLocation();
  const getNavClassName = (to) =>
    `admin-nav-link${pathname === to || (to !== "/admin" && pathname.startsWith(`${to}/`)) ? " active" : ""}`;
  const closeMobileMenu = (event) => {
    const drawer = event.currentTarget.closest(".admin-mobile-drawer");
    if (drawer) drawer.open = false;
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <img src="/logo.png" alt="DevPath" />
        </div>
        <AdminNavigation getNavClassName={getNavClassName} />
        <BackToSiteLink />
      </aside>
      <details className="admin-mobile-drawer">
        <summary aria-label="Toggle admin navigation">
          <span className="admin-menu-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <img src="/logo.png" alt="DevPath" />
        </summary>
        <div className="admin-mobile-panel">
          <AdminNavigation
            getNavClassName={getNavClassName}
            onNavigate={closeMobileMenu}
          />
          <BackToSiteLink onNavigate={closeMobileMenu} />
        </div>
      </details>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

function AdminNavigation({ getNavClassName, onNavigate }) {
  return (
    <nav aria-label="Admin dashboard">
      {adminNavigationItems.map(([to, label]) => (
        <Link
          className={getNavClassName(to)}
          key={to}
          onClick={onNavigate}
          to={to}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

function BackToSiteLink({ onNavigate }) {
  return (
    <Link className="admin-back-link" onClick={onNavigate} to="/">
      <svg
        className="admin-back-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" />
      </svg>
      <span>Back to site</span>
    </Link>
  );
}

function AdminTablePage({ section }) {
  if (section === "users") {
    return (
      <AdminDataTable
        eyebrow="USER MANAGEMENT"
        title="Manage users"
        description="Create, search, edit, and manage every account on DevPath."
        action="Add user"
        actionTo="/admin/users/new"
        editTo="/admin/users/edit"
        statusColumn={3}
        columns={["Name", "Email", "Role", "Status", "Actions"]}
        rows={[
          ["Alex Morgan", "alex@example.com", "Learner", "Active"],
          ["Samira Khan", "samira@example.com", "Mentor", "Active"],
          ["Northstar Labs", "hello@northstar.dev", "Organization", "Pending"],
        ]}
      />
    );
  }

  if (section === "learners") {
    return (
      <AdminDataTable
        eyebrow="LEARNERS"
        title="Learner accounts"
        description="Review learner activity and progress across every roadmap."
        action="Add learner"
        actionTo="/admin/learners/new"
        editTo="/admin/learners/edit"
        statusColumn={null}
        columns={["Name", "Roadmap", "Progress", "Last active", "Actions"]}
        rows={[
          ["Alex Morgan", "Frontend", "68%", "Today"],
          ["Maya Patel", "Data Analyst", "42%", "Yesterday"],
          ["Owen Brooks", "Backend", "81%", "3 days ago"],
        ]}
      />
    );
  }

  if (section === "mentors") {
    return (
      <AdminDataTable
        eyebrow="MENTORS"
        title="Mentor accounts"
        description="Manage mentors and review their availability and expertise."
        action="Add mentor"
        actionTo="/admin/mentors/new"
        editTo="/admin/mentors/edit"
        statusColumn={3}
        columns={["Name", "Specialty", "Availability", "Status", "Actions"]}
        rows={[
          ["Samira Khan", "Frontend", "Available", "Active"],
          ["Daniel Reed", "DevOps", "Busy", "Active"],
          ["Priya Shah", "Data Science", "Review", "Pending"],
        ]}
      />
    );
  }

  if (section === "organizations") {
    return (
      <AdminDataTable
        eyebrow="ORGANIZATIONS"
        title="Organization accounts"
        description="Manage companies and teams using DevPath for learning."
        action="Add organization"
        actionTo="/admin/organizations/new"
        editTo="/admin/organizations/edit"
        statusColumn={3}
        columns={["Organization", "Email", "Members", "Status", "Actions"]}
        rows={[
          ["Northstar Labs", "hello@northstar.dev", "24", "Pending"],
          ["Brightline Studio", "team@brightline.dev", "18", "Active"],
          ["Orbit Systems", "people@orbit.io", "42", "Active"],
        ]}
      />
    );
  }

  if (section === "roadmaps") {
    return (
      <AdminDataTable
        eyebrow="ROADMAPS"
        title="Roadmap library"
        description="Create and maintain the learning paths shown on DevPath."
        action="Add roadmap"
        actionTo="/admin/roadmaps/new"
        editTo="/admin/roadmaps/edit"
        columns={["Title", "Category", "Learners", "Status", "Actions"]}
        rows={[
          ["Frontend", "Role-based", "12,480", "Published"],
          ["Python", "Skill-based", "9,210", "Published"],
          ["AI Engineer", "Role-based", "4,805", "Draft"],
        ]}
      />
    );
  }

  return (
    <AdminDataTable
      eyebrow="GUIDES & COURSES"
      title="Content library"
      description="Manage guides, lesson packs, and educational resources."
      action="Add content"
      actionTo="/admin/content/new"
      editTo="/admin/content/edit"
      statusColumn={3}
      columns={["Title", "Type", "Author", "Status", "Actions"]}
      rows={[
        [
          "Environment variables in Python",
          "Guide",
          "DevPath Team",
          "Published",
        ],
        ["Open-source contribution", "Lesson pack", "Samira Khan", "Review"],
        ["Website request lifecycle", "Deep dive", "DevPath Team", "Draft"],
      ]}
    />
  );
}

function AdminDataTable({
  eyebrow,
  title,
  description,
  action,
  actionTo,
  editTo,
  columns,
  rows,
  statusColumn = 3,
}) {
  return (
    <>
      <AdminHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={action}
        actionTo={actionTo}
      />
      <section className="admin-panel">
        <div className="admin-toolbar">
          <input type="search" placeholder={`Search ${title.toLowerCase()}`} />
          <button className="admin-button secondary" type="button">
            Filter
          </button>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${cell}`}>
                      {index === statusColumn ? (
                        <span
                          className={`admin-status ${["pending", "review", "draft", "suspended"].includes(cell.toLowerCase()) ? "pending-status" : "active-status"}`}
                        >
                          {cell}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                  <td>
                    <Link className="admin-table-action" to={editTo}>
                      Edit
                    </Link>
                    <button className="admin-table-action" type="button">
                      Delete
                    </button>
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

function AdminHeader({ eyebrow, title, description, action, actionTo }) {
  return (
    <header className="admin-page-header">
      <div>
        <p className="admin-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {actionTo ? (
        <Link className="admin-button primary" to={actionTo}>
          {action}
        </Link>
      ) : action ? (
        <button className="admin-button primary" type="button">
          {action}
        </button>
      ) : null}
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
            <li>
              <strong>Northstar Labs</strong> submitted an organization request.
            </li>
            <li>
              <strong>Priya Shah</strong> submitted a mentor application.
            </li>
            <li>
              <strong>Python roadmap</strong> received 120 new learners.
            </li>
          </ul>
        </div>
        <div>
          <h2>Quick actions</h2>
          <div className="admin-quick-links">
            <Link to="/admin/users">Manage users</Link>
            <Link to="/admin/approvals">Review approvals</Link>
            <Link to="/admin/roadmaps">Edit roadmaps</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AdminApprovals() {
  const queues = [
    { title: "Mentor applications", count: 6, to: "/admin/mentors" },
    { title: "Organization requests", count: 4, to: "/admin/organizations" },
    { title: "Content reviews", count: 8, to: "/admin/content" },
  ];

  return (
    <>
      <AdminHeader
        eyebrow="APPROVALS"
        title="Review approvals"
        description="Review new accounts and content before they appear publicly."
      />
      <section className="admin-approval-grid">
        {queues.map(({ title, count, to }) => (
          <article className="admin-panel admin-approval-card" key={title}>
            <span className="admin-count">{count}</span>
            <h2>{title}</h2>
            <p>Items are waiting for an administrator decision.</p>
            <Link className="admin-button secondary" to={to}>
              Review queue
            </Link>
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
            <div key={month}>
              <span style={{ height: `${35 + index * 10}%` }} />
              <small>{month}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AdminSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(adminSettingsSchema) });

  return (
    <>
      <AdminHeader
        eyebrow="SETTINGS"
        title="Admin settings"
        description="Manage your administrator profile and platform preferences."
      />
      <form
        className="admin-panel admin-settings-form"
        noValidate
        onSubmit={handleSubmit(() => {})}
      >
        <h2>Profile settings</h2>
        <label htmlFor="admin-name">Display name</label>
        <input
          id="admin-name"
          defaultValue="DevPath Admin"
          {...register("name")}
        />
        <SettingsFieldError error={errors.name} />
        <label htmlFor="admin-email">Email address</label>
        <input
          id="admin-email"
          type="email"
          defaultValue="admin@devpath.dev"
          {...register("email")}
        />
        <SettingsFieldError error={errors.email} />
        <button className="admin-button primary" type="submit">
          Save changes
        </button>
      </form>
    </>
  );
}

export {
  AdminDashboard,
  AdminHome,
  AdminApprovals,
  AdminReports,
  AdminSettings,
  AdminTablePage,
};
