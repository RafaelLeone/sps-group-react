import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const handleDeleteUser = (email) => {
    axios.delete(`/users/${email}`)
      .then(() => {
        // Update state after deletion
        setUsers(prevUsers => prevUsers.filter(user => user.email !== email));
      })
      .catch(error => {
        console.error(`Error deleting user ${email}:`, error);
      });
  };

  return (
    <div>
      <h1>Usuários</h1>
      <div>
        <h2>Lista de Usuários</h2>
        <ul>
          {users.map(user => (
            <li key={user.email}>
              {user.name} - {user.email} - {user.type}
              <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
