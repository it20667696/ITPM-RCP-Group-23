import React, { useState } from "react";
import {
  Box,
  useTheme,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useGetCustomersQuery, useDeleteCustomerMutation } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log("data", data);

  const [deleteCustomer] = useDeleteCustomerMutation();
  const [selectedRows, setSelectedRows] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    navigate("/addCustomer");
  };

  const handleUpdate = async (id, rowData) => {
    navigate(`/customers/${id}/update`, { state: rowData });
  };

  const handleViewCustomer = (id) => {
    navigate(`/customers/${id}/view`);
  };

  const handleDelete = async (selectedIds) => {
    try {
      handleOpenDialog();
      await deleteCustomer(selectedIds);
      setSelectedRows([]);
    } catch (error) {
      console.error("Error deleting customers:", error);
    }
  };

  const columns = [
    {
      field: "selection",
      headerName: " ",
      headerClassName: "selection-header",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      flex: 0.2,
    },
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.6,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.8,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 0.6,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.6,
      renderCell: (params) => (
        <div>
          <IconButton
            color="success"
            component="span"
            onClick={() => handleViewCustomer(params.id)}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton
            color="secondary"
            component="span"
            onClick={() => handleUpdate(params.id, params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            component="span"
            onClick={() => handleDelete(params.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <Stack>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginBottom: "20px",
              width: "200px",
            }}
            onClick={handleCreate}
          >
            Add Customer
          </Button>
        </Stack>

        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
      <div>
        <Dialog open={open} onClose={handleCloseDialog}>
          <DialogTitle>Delete Customer</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete customer?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleCloseDialog} color="error" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
};

export default Customers;
