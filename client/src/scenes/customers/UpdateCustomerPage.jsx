import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useUpdateCustomerMutation } from "state/api";
import { Typography, TextField, Button, Stack } from "@mui/material";
import "./UpdateCustomerPage.css";

const UpdateCustomerPage = () => {
  const { id } = useParams();
  const { state: customerData } = useLocation();
  const [updateCustomer, { isLoading: isUpdating }] =
    useUpdateCustomerMutation();
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

  useEffect(() => {
    if (customerData) {
      setCustomer(customerData);
    }
  }, [customerData]);

  const handleUpdate = async () => {
    try {
      await updateCustomer({ id, updatedCustomer: customer });
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

  if (!customerData) {
    return <div>Loading...</div>;
  }

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
            Update Customer
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

export default UpdateCustomerPage;
