import React, { useState, useEffect } from "react";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  // ✅ Correct: Include `userId` in dependency array
  useEffect(() => {
    console.log(`Fetching data for user ${userId}...`);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);  // ✅ Now `userId` is included

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <p><strong>{user.name}</strong> ({user.email})</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;


