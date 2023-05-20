import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CreateReq = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  };

  const formContainerStyle = {
    width: '500px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',  };

  const inputStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  const submitButtonStyle = {
    padding: '10px',
    width: '100%',
    backgroundColor: 'blue',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const [customer_id,setCustermerId] = useState('');
  const [name,setName] = useState('');
  const [contact,setContact] = useState('');
  const [address,setAddress] = useState('');
  const [time,setTime] = useState('');
  const [date,setDate] = useState('');
  const [qty,setQty] = useState('');
  const [quality,setQuality] = useState('');
  const [material_type,setMaterialType] = useState('');
  const [latitude,setLatitude] = useState('');
  const [longitude,setLongitude] = useState('');
  const [status,setStatus] = useState('');

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
        .post('http://localhost:5000/CollectReq', reqdata)
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




  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>Create Collect Request</h2>
        <form onSubmit={createReq}> 

        <TextField
            id="outlined-fullName-input"
            label="Name"
            type="text"
            margin="none"
            style={inputStyle}
            onChange={(e) => {setName(e.target.value);}}
          />

          <TextField
            id="outlined-conatc-input"
            label="Contact"
            type="text"
            margin="none"
            style={inputStyle}
            onChange={(e) => {setContact(e.target.value);}}
          />

          <TextField
            id="outlined-address-input"
            label="Address"
            type="text"
            margin="none"
            style={inputStyle}
            onChange={(e) => {setAddress(e.target.value);}}
          />
          <TextField
            id="outlined-time-input"
            type="time"
            margin="none"
            style={inputStyle}
            onChange={(e) => {setTime(e.target.value);}}
          />
          <TextField
            id="outlined-date-input"
            type="date"
            margin="none"
            style={inputStyle}
            onChange={(e) => {setDate(e.target.value);}}
          />
           <TextField
          id="outlined-quntity-input"
          label="Quantity"
          type="number"
          style={inputStyle}
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



         

          <button style={submitButtonStyle} type="submit">
            Create Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateReq;
