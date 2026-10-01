function AdminCrud() {
  return (
    <section className="admin-crud" aria-labelledby="admin-crud-title">
      <header className="admin-crud-header">
        <div>
          <p className="admin-crud-eyebrow">ADMINISTRATION</p>
          <h1 id="admin-crud-title">User management</h1>
          <p>Manage learners, mentors, and organization accounts.</p>
        </div>
        <button className="admin-crud-primary" type="button">+ Add user</button>
      </header>

      <div className="admin-crud-toolbar">
        <label htmlFor="admin-user-search">Search users</label>
        <input id="admin-user-search" type="search" placeholder="Search by name or email" />
        <label htmlFor="admin-user-role">Role</label>
        <select id="admin-user-role" defaultValue="all">
          <option value="all">All roles</option>
          <option value="learner">Learner</option>
          <option value="mentor">Mentor</option>
          <option value="organization">Organization</option>
        </select>
        <button className="admin-crud-secondary" type="button">Filter</button>
      </div>

      <div className="admin-crud-content">
        <div className="admin-crud-form-panel">
          <h2>Create user</h2>
          <form>
            <label htmlFor="crud-name">Full name</label>
            <input id="crud-name" type="text" placeholder="Enter full name" />
            <label htmlFor="crud-email">Email address</label>
            <input id="crud-email" type="email" placeholder="name@example.com" />
            <label htmlFor="crud-role">Role</label>
            <select id="crud-role" defaultValue="learner">
              <option value="learner">Learner</option>
              <option value="mentor">Mentor</option>
              <option value="organization">Organization</option>
            </select>
            <button className="admin-crud-primary" type="submit">Save user</button>
          </form>
        </div>

        <div className="admin-crud-table-panel">
          <div className="admin-crud-table-heading"><h2>All users</h2><span>3 accounts</span></div>
          <div className="admin-crud-table-wrap">
            <table>
              <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                <tr><td>Alex Morgan</td><td>alex@example.com</td><td>Learner</td><td><span className="admin-status active-status">Active</span></td><td><button type="button">Edit</button><button type="button">Delete</button></td></tr>
                <tr><td>Samira Khan</td><td>samira@example.com</td><td>Mentor</td><td><span className="admin-status active-status">Active</span></td><td><button type="button">Edit</button><button type="button">Delete</button></td></tr>
                <tr><td>Northstar Labs</td><td>hello@northstar.dev</td><td>Organization</td><td><span className="admin-status pending-status">Pending</span></td><td><button type="button">Edit</button><button type="button">Delete</button></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminCrud
