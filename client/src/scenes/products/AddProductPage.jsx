import React, { useState } from "react";
import { useCreateProductMutation } from "state/api";
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

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [supply, setSupply] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: Number(price),
      description,
      category,
      rating: Number(rating),
      supply: Number(supply),
    };

    try {
      const response = await createProduct(newProduct);

      if (response.data) {
        setIsSnackbarOpen(true);
        navigate("/products");
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
          Create New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                label="Description"
                multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Rating"
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                fullWidth
                required
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Supply"
                type="number"
                value={supply}
                onChange={(e) => setSupply(e.target.value)}
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
};

export default AddProductPage;
