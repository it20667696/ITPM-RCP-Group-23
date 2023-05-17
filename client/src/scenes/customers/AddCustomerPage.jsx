// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Typography, Stack } from "@mui/material";
// import axios from "axios";
// import { useCreateCustomerMutation } from "state/api";

// const AddCustomerPage = () => {
//   const navigate = useNavigate();
//   //   const [formData, setFormData] = useState({
//   //     name: "",
//   //     email: "",
//   //     password: "",
//   //     city: "",
//   //     state: "",
//   //     country: "",
//   //     occupation: "",
//   //     phoneNumber: "",
//   //   });

//   //   const handleChange = (event) => {
//   //     const { name, value } = event.target;
//   //     setFormData((prevData) => ({
//   //       ...prevData,
//   //       [name]: value,
//   //     }));
//   //   };

//   //   const handleSubmit = async (event) => {
//   //     event.preventDefault();

//   //     try {
//   //       const response = await axios.post(
//   //         "http://localhost:5000/client/addCustomer",
//   //         formData
//   //       );

//   //       if (response.status === 201) {
//   //         console.log("Customer created:", response.data);
//   //       }
//   //     } catch (error) {
//   //       console.error("Error creating customer:", error);
//   //     }
//   //   };

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     city: "",
//     state: "",
//     country: "",
//     occupation: "",
//     phoneNumber: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const [createCustomer, { isError, isLoading }] = useCreateCustomerMutation();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await createCustomer(formData);

//       if (data) {
//         console.log("Customer created:", data);
//         // Handle success, such as displaying a success message or navigating to a different page
//       }
//     } catch (error) {
//       console.error("Error creating customer:", error);
//       // Handle error, such as displaying an error message
//     }
//   };

//   return (
//     <div>
//       <Stack sx={{ marginTop: "20px", marginLeft: "20px" }}>
//         <Typography variant="h4" sx={{ marginBottom: "20px" }}>
//           Add New Customer
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             name="name"
//             label="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             sx={{ marginBottom: "10px" }}
//           />
//           <br />
//           <TextField
//             name="email"
//             label="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             sx={{ marginBottom: "10px" }}
//           />
//           <br />
//           <TextField
//             name="password"
//             label="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             sx={{ marginBottom: "10px" }}
//           />
//           <br />
//           <TextField
//             name="city"
//             label="City"
//             value={formData.city}
//             onChange={handleChange}
//             sx={{ marginBottom: "10px" }}
//           />
//           <br />
//           <TextField
//             name="state"
//             label="State"
//             value={formData.state}
//             onChange={handleChange}
//             sx={{ marginBottom: "10px" }}
//           />
//           <br />
//           <TextField
//             name="country"
//             label="Country"
//             value={formData.country}
//             onChange={handleChange}
//             sx={{ marginBottom: "10px" }}
//           />
//           <br />
//           <TextField
//             name="occupation"
//             label="Occupation"
//             value={formData.occupation}
//             onChange={handleChange}
//             sx={{ marginBottom: "10px" }}
//           />
//           <br />
//           <TextField
//             name="phoneNumber"
//             label="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             sx={{ marginBottom: "10px" }}
//           />
//           <br />
//           <Button
//             type="submit"
//             variant="contained"
//             color="secondary"
//             onClick={handleSubmit}
//           >
//             Add Customer
//           </Button>
//         </form>
//       </Stack>
//     </div>
//   );
// };

// export default AddCustomerPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateCustomerMutation } from "state/api";
import { Typography, TextField, Button, Stack } from "@mui/material";
import "./UpdateCustomerPage.css";

const AddCustomerPage = () => {
  const [createCustomer, { isLoading: isUpdating }] =
    useCreateCustomerMutation();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
    phoneNumber: "",
    role: "",
  });

  const handleUpdate = async () => {
    try {
      await createCustomer(customer);
      navigate("/customers");
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  const handleCancel = () => {
    navigate("/customers");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  return (
    <div className="update-customer-page">
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Update Customer
      </Typography>

      <div className="update-customer-page-fields">
        <div className="update-customer-page-fields-text">
          <Stack>
            <TextField
              label="Name"
              name="name"
              value={customer.name}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="Email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={customer.phoneNumber}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
          </Stack>
          <Stack>
            <TextField
              label="City"
              name="city"
              value={customer.city}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="State"
              name="state"
              value={customer.state}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="Country"
              name="country"
              value={customer.country}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
          </Stack>
          <Stack>
            <TextField
              label="Occupation"
              name="occupation"
              value={customer.occupation}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="Role"
              name="role"
              value={customer.role}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
        </div>
        <Stack sx={{ gap: "40px", display: "flex", flexDirection: "row" }}>
          <Button
            variant="contained"
            onClick={handleUpdate}
            color="secondary"
            sx={{ width: "230px" }}
          >
            Add Customer
          </Button>

          <Button
            variant="outlined"
            onClick={handleCancel}
            color="secondary"
            sx={{ width: "230px" }}
          >
            Cancel
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default AddCustomerPage;
