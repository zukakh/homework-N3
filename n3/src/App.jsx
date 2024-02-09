import React, { useState, useEffect } from 'react';

// Function to generate an array of ten user names
function generateUsers() {
  const users = [];
  for (let i = 1; i <= 10; i++) {
    users.push(`User ${i}`);
  }
  return users;
}

function App() {
  const [users, setUsers] = useState(generateUsers());

  const handleRemoveUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const updatedUsers = [...users];
    updatedUsers.splice(randomIndex, 1);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    document.title = `${users.length} users left (10 users total)`;
  }, [users]);

  return (
    <div>
      <h1>{`${users.length} users left (10 users total)`}</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <button onClick={handleRemoveUser}>Remove Random User</button>
    </div>
  );
}

export default App;
