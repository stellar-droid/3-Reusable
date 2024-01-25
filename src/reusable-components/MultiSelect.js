import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MultiSelect = ({ options, fieldData,data,value }) => {
  


  const getFieldsDetails = () => {
    var data = {};
  
    fieldData
      .filter(item => item.type === 'select')
      .forEach(item => {
        data[item.name] = '';
        console.log("fieldDatadetails",item);
      });
  
    return data;
  }
  


  const getFieldsValidations = () => {
    var data = {};

    fieldData.filter(item => item.type === 'select')
        .forEach(item => {
            data[item.name] = item.validationRule;
            console.log("itemssdfds", item);
        });

    console.log('datasfdsd', data);
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
          {options.length > 0 && options.map((option, index) => (

            <MenuItem value={option.option}>{option.option}</MenuItem>

          ))}

        </Select>
      </FormControl>
    </Box>
  );
}

export default MultiSelect;


