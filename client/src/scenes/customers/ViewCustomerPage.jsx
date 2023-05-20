import { useGetCustomerByIdQuery } from "state/api";
import { Typography, Stack, Button, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ViewCustomerPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCustomerByIdQuery(id);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading customer.</div>;
  }

  const { name, email, phoneNumber, city, state, country, occupation, role } =
    data;

  const handleCancel = () => {
    navigate("/customers");
  };

  return (
    <div>
      <Stack sx={{ marginLeft: "20px", marginTop: "20px" }}>
        <Stack sx={{ marginBottom: "20px" }}>
          <Typography variant="h4">View Customer</Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Name: <Typography variant="h6">{name}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Email:
            <Typography variant="h6">{email}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Phone Number: <Typography variant="h6">{phoneNumber}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            City:
            <Typography variant="h6">{city}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            State:
            <Typography variant="h6">{state}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Country:
            <Typography variant="h6">{country}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Occupation:
            <Typography variant="h6">{occupation}</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ marginBottom: "10px" }}>
          <Typography>
            Role:
            <Typography variant="h6">{role}</Typography>
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

export default ViewCustomerPage;
