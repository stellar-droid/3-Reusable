// TaskForm.jsx
import React from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const FormContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1; /* Ensure the form appears above other elements */
  max-width: 600px; /* Set a maximum width for the form */
  width: 100%; /* Take up the full width of the container */
  border: 1px solid red;
  height: 550px;
  overflow: auto;
 
`;

const TaskForm = ({ onClose,buttontext2,buttontext1,inputlabeltext1,buttontext,inputlabeltext,status,heading,textfield1,textfield2,textfield3,textfield4,textfield5,textfield6 }) => {

  const statusOptions = ['Active', 'Inactive', 'Pending'];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic

    // Close the form after submission
    onClose();
  };

  return (
   
      <FormContainer>
        <h2>{heading}</h2>
        <form>
      <TextField value={textfield1} fullWidth margin="normal" />
      <TextField  value={textfield2} fullWidth margin="normal" />
      <TextField value={textfield3} fullWidth margin="normal" />
      <TextField  value={textfield4}fullWidth margin="normal" />
      <TextField  fullWidth margin="normal" value={textfield5} />
      <TextField  fullWidth margin="normal" value={textfield6} />
      
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="status">{status}</InputLabel>
        <Select label="Status" id="status">
          {statusOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField label="Client Name" fullWidth margin="normal" />

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="assignCredential">{inputlabeltext}</InputLabel>
        <Button variant="outlined" id="assignCredential">
          {buttontext}
        </Button>
      </FormControl>

      <FormControlLabel control={<Switch />} label="Console Enabled" />
      <FormControlLabel control={<Switch />} label="SNMP Enabled" />

      {/* <FormControl fullWidth margin="normal">
        <InputLabel>{inputlabeltext1}</InputLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Type 1" />
          <FormControlLabel control={<Checkbox />} label="Type 2" />
          <FormControlLabel control={<Checkbox />} label="Type 3" />
          <FormControlLabel control={<Checkbox />} label="Type 4" />
        </FormGroup>
      </FormControl> */}

      <TextareaAutosize
        label="Additional Comments"
        placeholder="Type your comments here"
        minRows={3}
        fullWidth
        margin="normal"
      />

      <Button variant="contained" color="primary" fullWidth >
       {buttontext1}
      </Button>
    </form>
        <button onClick={onClose}>{buttontext2}</button>  
      </FormContainer>
   
  );
};

export default TaskForm;
