import React, { useEffect, useState } from "react";

export default function UserCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="card">
      <h3>API Fetch Example</h3>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p>📧 {user.email}</p>
          <p>🏙️ {user.address.city}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
