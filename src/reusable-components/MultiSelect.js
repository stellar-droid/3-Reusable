import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MultiSelect = ({  options }) => {
  const [age, setAge] = React.useState("");
  
  
  const handleChange = (event,newvalue) => {
    setAge(event.target.value);
    
  };

  return (
    <Box >
      <FormControl sx={{ width: '120px' }} >
        <InputLabel id="">Age</InputLabel>
        <Select
          labelId=""
          id=""
          value={age}
          label="Age"
          onChange={handleChange}
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


