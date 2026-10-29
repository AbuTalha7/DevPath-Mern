import User from "../models/User.js";

export async function createUser(req, res) {
  const user = await User.create(req.body);
  res.status(201).json(user);
}

export async function getUsers(_req, res) {
  const users = await User.find();
  res.json(users);
}

export async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
}

export async function updateUser(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
}

export async function deleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ message: "User deleted" });
}
