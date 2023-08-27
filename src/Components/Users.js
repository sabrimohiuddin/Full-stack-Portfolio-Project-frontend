// import axios from "axios";
// import { useState, useEffect } from "react";
// import User from "./User";
// import UserForm from "./UserForm";

// const API = process.env.REACT_APP_API_URL;

// function Users() {
//   const [users, setUsers] = useState(null);

//   const handleAdd = (newUser) => {
//     axios
//       .post(`${API}/users`, newUser)
//       .then((response) => {
//         setUsers([response.data, ...users]);
//       })
//       .catch((error) => console.warn("catch", error));
//   };

//   const handleDelete = (userId) => {
//     axios
//       .delete(`${API}/users/${userId}`)
//       .then((response) => {
//         const updatedUsers = users.filter(user => user.id !== userId);
//         setUsers(updatedUsers);
//       })
//       .catch((error) => console.warn("catch", error));
//   };

//   const handleEdit = (updatedUser) => {
//     axios
//       .put(`${API}/users/${updatedUser.id}`, updatedUser)
//       .then((response) => {
//         const updatedUsers = users.map(user => 
//           user.id === updatedUser.id ? response.data : user
//         );
//         setUsers(updatedUsers);
//       })
//       .catch((error) => console.warn("catch", error));
//   };

//   useEffect(() => {
//     axios.get(`${API}/users`).then((response) => {
//       if (Array.isArray(response.data)) {
//         setUsers(response.data);
//       } else {
//         console.warn("Response data is not an array:", response.data);
//       }
//     });
//   }, [API]);

//   return (
//     <section className="Users">
//       <h3>Add a New User</h3>
//       <UserForm handleSubmit={handleAdd} />
//       <h2 className="h2-users">Users ({users ? users.length : 0})</h2>
//       {users && users.map((user) => (
//         <User
//           key={user.id}
//           user={user}
//           handleSubmit={handleEdit}
//           handleDelete={handleDelete}
//         />
//       ))}
//     </section>
//   );
// }

// export default Users;


