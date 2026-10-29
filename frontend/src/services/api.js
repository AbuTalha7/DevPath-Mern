const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

function request(path, options = {}) {
  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  }).then(async (response) => {
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data;
  });
}

function createResource(path) {
  return {
    getAll: (query = {}) => {
      const params = new URLSearchParams(query).toString();
      return request(`${path}${params ? `?${params}` : ""}`);
    },
    create: (data) =>
      request(path, { method: "POST", body: JSON.stringify(data) }),
    update: (id, data) =>
      request(`${path}/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    remove: (id) => request(`${path}/${id}`, { method: "DELETE" }),
  };
}

export const usersApi = createResource("/users");
export const roadmapsApi = createResource("/roadmaps");
export const getRoadmapBySlug = (slug) =>
  request(`/roadmaps/slug/${encodeURIComponent(slug)}`);

export const getUsers = () => usersApi.getAll();
export const createUser = (user) => usersApi.create(user);
export const updateUser = (id, user) => usersApi.update(id, user);
export const deleteUser = (id) => usersApi.remove(id);
