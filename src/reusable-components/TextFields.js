import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const TextFields = ({
    label,
    variant,
    required,
    disabled,
    type,
    multiline,
    placeholder,
    size
}) => {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" size={size} placeholder={placeholder} label={label} variant={variant} required={required} disabled={disabled} type={type} multiline={multiline} />

            </Box>
        </>
    )
}

export default TextFields