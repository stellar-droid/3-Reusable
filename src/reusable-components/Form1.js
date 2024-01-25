import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MultiSelect from './MultiSelect';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';



const Form1 = ({ textfieldata, formNo, width, fieldData }) => {




  const getFieldsDetails = () => {
    var data = {};

    textfieldata.map(item => {
      data[item.name] = '';
    })
    return data;

  }
  const test = getFieldsDetails();
  useEffect(() => {
    console.log('datadetails', test);
  });
  const getFieldsValidations = () => {
    var data = {};

    textfieldata.map(item => {
      data[item.name] = item.validationRule;
      console.log("item", item)
    })
    console.log('data', data)
    return data;

  }
  const validationSchema = Yup.object().shape(
    getFieldsValidations()
  );

  const formik = useFormik({
    initialValues: getFieldsDetails(),
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form submitted with values:', values);
    },
  });



  return (
    <>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: '5px',
        maxWidth: '600px',
        border: "1px solid red",
        height: "550px",
        overflow: "auto",
        display: "flex",
        width: "30%",
        float: "left",
      }}>
        <div>
          <h2>Form no. {formNo}</h2>
          <h2>Step 1: Add Device  </h2>
          <form onSubmit={formik.handleSubmit}>
            {textfieldata.map((data, index) => (
              data.type === "textfield" ? (
                <div key={index} style={{ display: "flex", width: width, float: "left" }}>
                  <TextField
                    label={data.label}
                    name={data.name} // Add a name to the field for Formik
                    value={formik.values[data.name]}
                    onChange={formik.handleChange}
                    fullWidth
                    margin="normal"
                    error={formik.touched[data.name] && Boolean(formik.errors[data.name])}
                    helperText={formik.touched[data.name] && formik.errors[data.name]}
                  />
                </div>
              ) : data.type === 'select' ? (data.options && (
                <div key={index} style={{ display: "flex", width: width, float: "left", marginBottom: "10px" }}>
                  <Box >
                    <FormControl sx={{ width: '120px' }} >
                      <InputLabel id="">Age</InputLabel>
                      <Select
                        name={data.name} // Add a name to the field for Formik
                        value={formik.values[data.name]}
                        onChange={formik.handleChange}
                        error={formik.touched[data.name] && Boolean(formik.errors[data.name])}
                        helperText={formik.touched[data.name] && formik.errors[data.name]}
                        // onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      >
                        {data.options.length > 0 && data.options.map((option, index) => (

                          <MenuItem value={option.option}>{option.option}</MenuItem>

                        ))}

                      </Select>
                      {formik.touched[data.name] && formik.errors[data.name] && (
                        <div style={{ marginTop: '4px', color: '#f44336', fontSize: '0.75rem' }}>{formik.errors[data.name]}</div>
                      )}
                    </FormControl>
                  </Box>
                </div>
              )) : null
            ))}


            <Button type="submit" variant="outlined" fullWidth>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form1;
