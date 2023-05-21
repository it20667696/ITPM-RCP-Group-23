import React, { useState } from "react";
import { useCreateItemMutation } from "state/api";
import {
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Stack,
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddInventoryPage = () => {
    const [product_id, setProduct_id] = useState("");
    const [product_name, setProduct_name] = useState("");
    const [description, setDescription] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [manufacture_date, setManufacture_date] = useState("");
    const [status, setStatus] = useState("");
    const [section, setSection] = useState("");
    const [category, setCategory] = useState("");
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    
    const navigate = useNavigate();

    const [createItem, { isLoading }] = useCreateItemMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInventory = {
      product_id: Number(product_id),
      product_name: String(product_name),
      description: String(description),
      manufacturer: String(manufacturer),
      price: Number(price),
      quantity: Number(quantity),
      manufacture_date: Number(manufacture_date),
      status: String(status),
      section: String(section),
      category: String(category),
      
    };

    try {
      const response = await createItem(newInventory);

      if (response.data) {
        setIsSnackbarOpen(true);
        navigate("/items");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setIsSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Stack sx={{ marginLeft: "20px", marginTop: "20px" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          Create New Inventory
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                label="Product Id"
                value={product_id}
                onChange={(e) => setProduct_id(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Product Name"
                value={product_name}
                onChange={(e) => setProduct_name(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Manufacture Date"
                multiline
                value={manufacture_date}
                onChange={(e) => setManufacture_date(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Status"
                multiline
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Section"
                multiline
                value={section}
                onChange={(e) => setSection(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Category"
                multiline
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disabled={isLoading}
                color="secondary"
                fullWidth
              >
                {isLoading ? "Creating..." : "Create"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Stack>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={7000}
        onClose={handleSnackbarClose}
        message="Product created successfully!"
      />
    </Container>
  );
}

export default AddInventoryPage;