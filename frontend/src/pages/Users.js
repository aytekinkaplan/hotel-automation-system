import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../api";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleSave = () => {
    fetchUsers();
    setSelectedUser(null);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm selectedUser={selectedUser} onSave={handleSave} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Users;
