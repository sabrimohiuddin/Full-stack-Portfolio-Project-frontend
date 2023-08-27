// import React, { useState } from "react";

// function UserForm({ handleSubmit, initialData }) {
//   const [formData, setFormData] = useState(initialData || {
//     username: "",
//     password: "",
//     email: "",
//     full_name: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     handleSubmit(formData);
//   };

//   return (
//     <form onSubmit={submitForm}>
//       <label htmlFor="username">Username:</label>
//       <input
//         type="text"
//         name="username"
//         id="username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       <br />

//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         name="password"
//         id="password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <br />

//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <br />

//       <label htmlFor="full_name">Full Name:</label>
//       <input
//         type="text"
//         name="full_name"
//         id="full_name"
//         value={formData.full_name}
//         onChange={handleChange}
//       />
//       <br />

//       <label htmlFor="address">Address:</label>
//       <textarea
//         name="address"
//         id="address"
//         value={formData.address}
//         onChange={handleChange}
//       />
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default UserForm;



