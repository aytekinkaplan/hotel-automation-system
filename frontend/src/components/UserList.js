import React from "react";

function UserList({ users, onEdit, onDelete }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          <h3>{user.username}</h3>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
