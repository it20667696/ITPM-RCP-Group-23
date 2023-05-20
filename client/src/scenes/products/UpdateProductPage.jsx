import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useUpdateProductMutation, useGetProductByIdQuery } from "state/api";
import { Typography, TextField, Button, Stack } from "@mui/material";

const UpdateProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useGetProductByIdQuery(id);


 

  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    rating: 0,
    supply: 0,
  });

  const location = useLocation();
  const productData = location.state?.productData;

  useEffect(() => {
    
    if (productData) {
      setUpdatedProduct(productData);
    }
  }, [productData]);

  const [updateProductMutation] = useUpdateProductMutation();

  useEffect(() => {
    if (!isLoading && product) {
      setUpdatedProduct({
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        rating: product.rating,
        supply: product.supply,
      });
    }
  }, [isLoading, product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProductMutation({ id, updatedProduct });
      navigate("/products");
    } catch (error) {
      // Handle errors
    }
  };

  const handleChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate("/products");
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Stack sx={{ marginTop: "20px", marginLeft: "20px" }}>
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", marginTop: "20px", marginLeft: "20px" }}
        >
          Update Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Price"
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Description"
            multiline
            rows={4}
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Category"
            type="text"
            name="category"
            value={updatedProduct.category}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />

          <br />
          <TextField
            label="Rating"
            type="number"
            name="rating"
            value={updatedProduct.rating}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Supply"
            type="number"
            name="supply"
            value={updatedProduct.supply}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />

          <Stack sx={{ gap: "20px", display: "flex", flexDirection: "row" }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              color="secondary"
              sx={{ width: "180px" }}
            >
              Update Customer
            </Button>

            <Button
              variant="outlined"
              onClick={handleCancel}
              color="secondary"
              sx={{ width: "100px" }}
            >
              Cancel
            </Button>
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default UpdateProductPage;
