import { Modal, Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';

const EditSupplierModal = ({  row }) => {
    const [editedData, setEditedData] = useState({ ...row });
  
    const handleFieldChange = (fieldName, value) => {
      setEditedData((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    };

    console.log(row);
  
    const [id, setId] = useState(row.id || '');
    const [customer_id, setCustermerId] = useState(row.customer_id || '');
    const [name, setName] = useState(row.name || '');
    const [contact, setContact] = useState(row.contact || '');
    const [address, setAddress] = useState(row.address || '');
    const [time, setTime] = useState(row.time || '');
    const [date, setDate] = useState(row.date || '');
    const [qty, setQty] = useState(row.qty || '');
    const [quality, setQuality] = useState(row.quality || '');
    const [material_type, setMaterialType] = useState(row.material_type || '');
    const [latitude, setLatitude] = useState(row.latitude || '');
    const [longitude, setLongitude] = useState(row.longitude || '');
    const [status, setStatus] = useState(row.status || '');
    const [open, setOpen] = useState(false);
  
  async function createReq(e) {
    e.preventDefault();
    const reqdata = {
      custermer_id : "1",
      name,
      contact,
      address,
      time,
      date,
      qty,
      quality,
      material_type,
      latitude:"12",
      longitude:"12",
      status : "pending",
    };

    if(name.length === 0 || contact.length === 0 || address.length === 0 || time.length === 0 || date.length === 0 || qty.length === 0 || quality.length === 0 || material_type.length === 0){
      swal(' Fields Cannot empty !', 'Please enter all data !', 'error');
    }else{
      console.log(reqdata);
      axios
        .patch('http://localhost:5000/collectreq/'+id, reqdata)
        .then(function (response) {
         
          console.log(response);
          setCustermerId('');
          setName('');
          setContact('');
          setAddress('');
          setTime('');
          setDate('');
          setQty('');
          setQuality('');
          setMaterialType('');
          setLatitude('');
          setLongitude('');
          setStatus('');

          swal({
            text: 'Successfully Added',
            icon: 'success',
            button: 'Okay!',
          }).then((value) => {
            window.location = '/myrequsts';
          });       
         })


    }
  }


  return (<>
   <Button variant="contained" onClick={()=>setOpen(true)}>Edit</Button>
    <Modal open={open} onClose={()=>setOpen(false)}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <h2>Edit Request</h2>
        <form onSubmit={createReq}> 

<TextField
    id="outlined-fullName-input"
    label="Name"
    type="text"
    margin="none"
    value={name}
    onChange={(e) => {setName(e.target.value);}}
  />

  <TextField
    id="outlined-conatc-input"
    label="Contact"
    type="text"
    margin="none"
    value={contact}
    onChange={(e) => {setContact(e.target.value);}}
  />

  <TextField
    id="outlined-address-input"
    label="Address"
    type="text"
    value={address}
    margin="none"
    onChange={(e) => {setAddress(e.target.value);}}
  />
  <TextField
    id="outlined-time-input"
    type="time"
    value={time}
    margin="none"
    onChange={(e) => {setTime(e.target.value);}}
  />
  <TextField
    id="outlined-date-input"
    type="date"
    margin="none"
    value={date}
    onChange={(e) => {setDate(e.target.value);}}
  />
   <TextField
  id="outlined-quntity-input"
  label="Quantity"
  type="number"
  value={qty}
  InputLabelProps={{
    shrink: true,
  }}
  onChange={(e) => {setQty(e.target.value);}}
/>



<FormControl fullWidth className='mb-10'>
  <InputLabel id="demo-simple-select-label-quality">Quality</InputLabel>
  <Select
    labelId="demo-simple-select-label-quality"
    id="outlined-material-type"
    value={quality}
    label="Quality"
    onChange={(e) => {setQuality(e.target.value);}}
  >
    <MenuItem value={"Good"}>Good</MenuItem>
    <MenuItem value={"Average"}>Average</MenuItem>
    <MenuItem value={"Low"}>Low</MenuItem>


  </Select>
</FormControl>

<br/>
<br/>



<FormControl fullWidth className='mb-10'>
  <InputLabel id="demo-simple-select-label">Material Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="outlined-material-type"
    value={material_type}
    label="Material Type"
    onChange={(e) => {setMaterialType(e.target.value);}}
  >
    <MenuItem value={"Polythene"}>Polythene</MenuItem>
    <MenuItem value={"Plastic"}>Plastic</MenuItem>
    <MenuItem value={"Glass"}>Glass</MenuItem>
    <MenuItem value={"Paper"}>Paper</MenuItem>
    <MenuItem value={"Metal"}>Metal</MenuItem>

  </Select>
</FormControl>

<br/>
<br/>



 

  <button type="submit" >
    Update Request
  </button>
</form>
      </Box>
    </Modal>
    </>);
};


export default EditSupplierModal;
