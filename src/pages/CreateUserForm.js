import React, { useState } from 'react';
import axios from 'axios';

function CreateUserForm({ onUserCreated }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { username, email, password, type };
      const response = await axios.post('/users', newUser); // Assuming your backend endpoint for adding users is '/users'
      onUserCreated(response.data); // Notify parent component about the new user
      setUsername('');
      setEmail('');
      setPassword('');
      setType('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUserForm;
