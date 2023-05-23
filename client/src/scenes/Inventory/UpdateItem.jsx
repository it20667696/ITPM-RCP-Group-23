import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useUpdateItemMutation,  useGetItemsByIdQuery,
} from "state/api";
import { Typography, TextField, Button, Stack } from "@mui/material";

const UpdateInventoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: items, isLoading } = useGetItemsByIdQuery(id);


 
  


  
  const [updatedItem, setUpdatedItem] = useState({
    product_id:0,
    product_name:"",
    description: "",
    manufacturer: "",
    price: 0,
    quantity: 0,
    manufacture_date:0,
    status: "",
    section: "",
    category: "",
  });

  const location = useLocation();
  const itemData = location.state?.itemData;

  useEffect(() => {
    if (itemData) {
      setUpdatedItem(itemData);
    }
  }, [itemData]);

  const [updateItemMutation] = useUpdateItemMutation();

  useEffect(() => {
    if (!isLoading && items) {
      console.log(items);
      setUpdatedItem({
      

        product_id:items.product_id,
    product_name:items.product_name,
    description:items.description,
    manufacturer:items.manufacturer,
    price:items.price,
    quantity:items.quantity,
    manufacture_date:items.manufacture_date,
    status:items.status,
    section:items.section,
    category:items.category,
      });
    }
  }, [isLoading, items]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    console.log("UUUU>>>",updatedItem)
      let response =   await updateItemMutation({ id, updatedItem });
      console.log(">>>>>>>",response)
      navigate("/items");
    } catch (error) {
      // Handle errors
    }
  };

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate("/items");
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
          Update Item
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Product_ID"
            type="text"
            name="product_id"
            value={updatedItem.product_id}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Product Name"
            type="text"
            name="product_name"
            value={updatedItem.product_name}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Description"
            type="text"
            name="description"
            value={updatedItem.description}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Manufacturer"
            type="text"
            name="manufacturer"
            value={updatedItem.manufacturer}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Price"
            type="text"
            name="price"
            value={updatedItem.price}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Quantity"
            type="text"
            name="quantity"
            value={updatedItem.quantity}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="manufacture Date"
            type="text"
            name="manufacture_date"
            value={updatedItem.manufacture_date}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Status"
            type="text"
            name="status"
            value={updatedItem.status}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Section"
            type="text"
            name="section"
            value={updatedItem.section}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <br />
          <TextField
            label="Category"
            type="text"
            name="category"
            value={updatedItem.category}
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
              Update Item
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

export default UpdateInventoryPage;
