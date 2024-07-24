import React, { useState, useEffect } from "react";
import { createUser, updateUser } from "../api";

function UserForm({ selectedUser, onSave }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    role: "user",
  });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user._id) {
      await updateUser(user._id, user);
    } else {
      await createUser(user);
    }
    onSave();
    setUser({ username: "", password: "", email: "", role: "user" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <select name="role" value={user.role} onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}

export default UserForm;
