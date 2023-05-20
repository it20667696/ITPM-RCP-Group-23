import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import EditSupplierModal from './update_requests';
import { Link } from 'react-router-dom';



export default function MyRequests() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((row) =>
        row.date.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  const columns = [
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'contact', headerName: 'Contact', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'time', headerName: 'Time', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'qty', headerName: 'Quantity', width: 130 },
    { field: 'quality', headerName: 'Quality', width: 130 },
    { field: 'material_type', headerName: 'Material Type', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 150,
      renderCell: (params) => (<>
        <EditSupplierModal row={params.row} />
        <Button style={{marginLeft:"10px"}} variant="contained" onClick={()=>handleDelete(params.row.id)}>Delete</Button>
        </>
      ),
    },
  ];
  const[point, setPoint] = useState(0);
  const getData = () => {
    axios
      .get('http://localhost:5000/collectreq/')
      .then((res) => {
        const rowsWithId = res.data.map((row, index) => ({
          id: row._id,
          customer_id: row.customer_id,
          name: row.name,
          contact: row.contact,
          address: row.address,
          time: row.time,
          date: row.date,
          qty: row.qty,
          quality: row.quality,
          material_type: row.material_type,
          status: row.status,
          action: row.id,
        }));
        let p = 0;
        for (let i = 0; i < rowsWithId.length; i++) {
          p =p+parseInt(rowsWithId[i].qty);
        }
        setPoint(p*10)
        setData(rowsWithId);
      })
      .catch((err) => { 
        console.log(err);
      });
  };

//   const handleEdit = (id) => {
//     const selectedRow = data.find((row) => row.id === id);
//     setSelectedRow(selectedRow);
//     setEditModalOpen(true);
//   };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/collectreq/${id}`)
      .then((res) => {
        // refresh the data
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <Box textAlign="center" mt={3}>
      <Box mb={2}>
      <h1>My Requests</h1>

      <br />
      <br />

      <Link to='/createreq'>
      <Button variant="contained">Add Request</Button>
      </Link>
      <div ><h3>Total Points: {point}</h3> <Button variant="outlined" style={{color:'#ccc'}}>Use Points</Button></div>
    
      <br />
      <div className="d-flex justify-content-center mt-20">
        <div>
          <form>
          <TextField id="outlined-basic" label="Search by date (e.g. yyyy-mm-dd)" variant="outlined" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
/>
          </form>
        </div>
      </div>
      </Box>
      </Box>

      <br />
      <Button style={{marginLeft:"10px"}} variant="contained" onClick={()=>window.print()}>Export</Button>
      
      <DataGrid
      
        rows={filteredData}
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={5}
        checkboxSelection
        style={{ marginTop: '20px' }}
        slots={{ toolbar: GridToolbar }}

      />
     
        
    </>
  );
}
