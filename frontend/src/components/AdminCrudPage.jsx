import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader.jsx";

export default function AdminCrudPage({
  eyebrow,
  title,
  description,
  api,
  columns,
  fields,
}) {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [values, setValues] = useState({});
  const [error, setError] = useState("");

  function loadItems() {
    return api.getAll().then(setItems);
  }

  useEffect(() => {
    api.getAll().then(setItems).catch((requestError) => setError(requestError.message));
  }, [api]);

  function openForm(item = null) {
    setEditing(item);
    setValues(
      Object.fromEntries(
        fields.map((field) => [
          field.name,
          item?.[field.name] ?? field.options?.[0] ?? "",
        ])
      )
    );
    setError("");
    setFormOpen(true);
  }

  function saveItem(event) {
    event.preventDefault();
    const save = editing
      ? api.update(editing._id, values)
      : api.create(values);

    save
      .then(loadItems)
      .then(() => {
        setFormOpen(false);
        setEditing(null);
        setError("");
      })
      .catch((requestError) => {
        setError(requestError.message);
        setFormOpen(true);
      });
  }

  function deleteItem(item) {
    if (!confirm(`Delete ${item[columns[0].key]}?`)) return;
    api
      .remove(item._id)
      .then(loadItems)
      .catch((requestError) => {
        setError(requestError.message);
        setFormOpen(true);
      });
  }

  const getValue = (item, column) =>
    item[column.key] ?? (column.key === "role" ? "learner" : "");

  const visibleItems = items.filter((item) =>
    columns.some((column) =>
      String(getValue(item, column))
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  );

  return (
    <>
      <AdminHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action="Add"
        onClick={() => openForm()}
      />
      {formOpen && (
        <section className="admin-panel admin-crud-form-panel">
          <div className="admin-crud-table-heading">
            <h2>{editing ? "Edit item" : "Add item"}</h2>
            <button
              className="admin-button secondary"
              onClick={() => setFormOpen(false)}
              type="button"
            >
              Close
            </button>
          </div>
          <form className="admin-settings-form" onSubmit={saveItem}>
            {fields.map((field) => (
              <label key={field.name}>
                {field.label}
                {field.type === "select" ? (
                  <select
                    required
                    value={values[field.name] ?? ""}
                    onChange={(event) =>
                      setValues({ ...values, [field.name]: event.target.value })
                    }
                  >
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    required={field.name !== "slug"}
                    type={field.type}
                    value={values[field.name] ?? ""}
                    onChange={(event) =>
                      setValues({ ...values, [field.name]: event.target.value })
                    }
                  />
                )}
              </label>
            ))}
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="admin-button primary" type="submit">
              {editing ? "Save changes" : "Create"}
            </button>
          </form>
        </section>
      )}
      <section className="admin-panel">
        <div className="admin-toolbar">
          <input
            type="search"
            placeholder={`Search ${title.toLowerCase()}`}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                {columns.map((column) => <th key={column.key}>{column.label}</th>)}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleItems.length ? (
                visibleItems.map((item) => (
                  <tr key={item._id}>
                    {columns.map((column) => {
                      const value = getValue(item, column);
                      const isStatus = column.key === "status";
                      const active = ["published", "active"].includes(
                        String(value).toLowerCase()
                      );
                      return (
                        <td key={column.key}>
                          {isStatus ? (
                            <span
                              className={`admin-status ${active ? "active-status" : "pending-status"}`}
                            >
                              {value}
                            </span>
                          ) : (
                            value
                          )}
                        </td>
                      );
                    })}
                    <td>
                      <button
                        className="admin-table-action"
                        onClick={() => openForm(item)}
                        type="button"
                      >
                        Edit
                      </button>
                      <button
                        className="admin-table-action"
                        onClick={() => deleteItem(item)}
                        type="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length + 1}>
                    {items.length ? "No matching items" : "No items yet"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
