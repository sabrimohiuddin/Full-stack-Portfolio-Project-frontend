// import React, { useState, useEffect } from 'react';

// function User(props) {
//     const [user, setUser] = useState({});
  
//     useEffect(() => {
//       const userId = props.match.params.id;
//       fetch(`http://localhost:3003/users/${userId}`)
//         .then((response) => response.json())
//         .then((data) => setUser(data))
//         .catch((error) => console.error('Error fetching user:', error));
//     }, [props.match.params.id]);
  
//     return (
//       <div className="User">
//         <h2>{user.username}</h2>
//         <p>Email: {user.email}</p>
//         <p>Full Name: {user.full_name}</p>
//         <p>Address: {user.address}</p>
//       </div>
//     );
// }
  
// export default User;


