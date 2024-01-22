import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import './reusable.css';
import MultiSelect from './MultiSelect';

const Form1 = ({ textfieldata, formNo, width,selectOptions }) => {
    const [formData, setFormData] = useState(textfieldata);
    const handleChange = (event, index) => {
        const updatedData = [...formData];
        updatedData[index].value = event.target.value;
        setFormData(updatedData);
    };

    return (
        <>
            <div style={{
                background: "white",
                padding: "20px",
                borderRadius: '5px',
                maxWidth: '600px', /* Set a maximum width for the form */
                border: "1px solid red",
                height: "550px",
                overflow: "auto",
                display: "flex",
                width: "30%",
                float: "left"
            }}>
                <div >
                    <h2>Form no. {formNo}</h2>
                    <h2>Step 1: Add Device  </h2>
                    <form>
                        {formData.map((data, index) => (
                            <div key={index} style={{display:"flex",width:width,float:"left"}}>
                                <TextField
                                    label={data.label}
                                    value={data.value}
                                    onChange={(event) => handleChange(event, index)}
                                    fullWidth
                                    margin="normal"
                                />
                            </div>
                        ))}
                        
                           {selectOptions && <div style={{display:"flex",width:width,float:"left"}}>
                                <MultiSelect options={selectOptions}/>
                            </div>}
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form1;
