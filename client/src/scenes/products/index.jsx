import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDeleteProductMutation } from "state/api";
import { Link, useNavigate } from "react-router-dom";

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [deleteProductMutation] = useDeleteProductMutation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductsQuery();

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteProductMutation(_id);
      handleCloseDialog();
    } catch (error) {}
  };

  const handleUpdate = () => {
    navigate(`/update-product/${_id}`, { state: { productData: data } });
  };

  const handleViewProduct = () => {
    navigate(`/products/${_id}/view`);
  };

  return (
    <div>
      <Card
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.55rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color={theme.palette.secondary[700]}
            gutterBottom
          >
            {category}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            sx={{ mb: "1.5rem" }}
            color={theme.palette.secondary[400]}
          >
            ${Number(price).toFixed(2)}
          </Typography>
          <Rating value={rating} readOnly />

          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            See More
          </Button>
          <IconButton
            color="success"
            component="span"
            onClick={handleViewProduct}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton color="secondary" component="span" onClick={handleUpdate}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" component="span" onClick={handleOpenDialog}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{
            color: theme.palette.neutral[300],
          }}
        >
          <CardContent>
            <Typography>id: {_id}</Typography>
            <Typography>Supply Left: {supply}</Typography>
            <Typography>
              Yearly Sales This Year: {stat.yearlySalesTotal}
            </Typography>
            <Typography>
              Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
            </Typography>
          </CardContent>
        </Collapse>
        <div>
          <Dialog open={open} onClose={handleCloseDialog}>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete the product?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleDelete} color="error" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Card>
    </div>
  );
};

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/addProduct");
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      <Stack>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            width: "200px",
          }}
          onClick={handleCreate}
        >
          Add Product
        </Button>
      </Stack>
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="40px"
          columnGap="2.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;

// const Products = () => {
//   const { data, isLoading } = useGetProductsQuery();
//   console.log("data", data);
//   return <div>See all Products</div>;
// };

// export default Products;
