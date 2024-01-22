import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MultiSelect = ({opt1,opt2,opt3}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box >
      <FormControl sx={{width:'120px'}} >
        <InputLabel id="">Age</InputLabel>
        <Select
          labelId=""
          id=""
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={opt1}>{opt1}</MenuItem>
          <MenuItem value={opt2}>{opt2}</MenuItem>
          <MenuItem value={opt3}>{opt3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default MultiSelect;


