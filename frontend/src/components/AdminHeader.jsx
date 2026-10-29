export default function AdminHeader({ eyebrow, title, description, action, onClick }) {
  return (
    <header className="admin-page-header">
      <div>
        <p className="admin-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action ? (
        <button className="admin-button primary" onClick={onClick} type="button">
          {action}
        </button>
      ) : null}
    </header>
  );
}
