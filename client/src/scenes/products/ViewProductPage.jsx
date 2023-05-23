import { useGetProductByIdQuery } from "state/api";
import { Typography, Stack, Button, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ViewProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  const navigate = useNavigate();




  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading customer.</div>;
  }

  const { name, price, description, category, rating, supply } = data;


 

  const handleCancel = () => {
    navigate("/products");
  };

  return (
    <div>
      <Stack sx={{ marginLeft: "20px", marginTop: "20px" }}>
        <Stack sx={{ marginBottom: "20px" }}>
          <Typography variant="h4">View Product</Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Name: <Typography variant="h6">{name}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Price:
            <Typography variant="h6">{price}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Description: <Typography variant="h6">{description}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Category:
            <Typography variant="h6">{category}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Rating:
            <Typography variant="h6">{rating}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Supply:
            <Typography variant="h6">{supply}</Typography>
          </Typography>
        </Stack>

        <Stack sx={{ marginBottom: "10px" }}>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <IconButton color="secondary" component="span">
              <EditIcon />
            </IconButton>
            <IconButton color="error" component="span">
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Stack sx={{ marginBottom: "10px" }}>
          <Button
            variant="outlined"
            onClick={handleCancel}
            color="secondary"
            sx={{ width: "230px" }}
          >
            Back
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default ViewProductPage;
