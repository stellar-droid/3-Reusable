import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import './reusable.css';



// const FormContainer = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 5px;
// //   z-index: 1; /* Ensure the form appears above other elements */
//   max-width: 600px; /* Set a maximum width for the form */
//   width: 100%; /* Take up the full width of the container */
//   border: 1px solid red;
//   height: 550px;
//   overflow: auto;

// `;
const Form1 = ({ textfieldata, xs }) => {
    const [formData, setFormData] = useState(textfieldata);
    const handleChange = (event, index) => {
        const updatedData = [...formData];
        updatedData[index].value = event.target.value;
        setFormData(updatedData);
    };



    return (
        <>
            <Grid container >
                <Grid item  sx={{
                    background: "white",
                    padding: "20px",
                    borderRadius: '5px',
                    zIndex: '1', /* Ensure the form appears above other elements */
                    maxWidth: '600px', /* Set a maximum width for the form */
                    width: "100%", /* Take up the full width of the container */
                    border: "1px solid red",
                    height: "550px",
                    overflow: "auto",
                }}>
                    <div >
                        <h2>Step 1: Add Device  </h2>
                        <form>
                            <Grid container >
                                {formData.map((data, index) => (
                                    <Grid xs={xs}>
                                        <TextField
                                            key={index}
                                            label={data.label}
                                            value={data.value}
                                            onChange={(event) => handleChange(event, index)}
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                ))}

                            </Grid>
                        </form>

                    </div>
                </Grid>
            </Grid >
        </>
    )
}

export default Form1