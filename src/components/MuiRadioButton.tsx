import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormHelperText
} from "@mui/material"
import { useState } from "react"

export const MuiRadioButton = () => {
    const [value,setValue]=useState('')
    console.log({value})
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
    return <Box>
        <FormControl>
            <FormLabel id="years-of-experience">
                Years Of Experience
            </FormLabel>
            <RadioGroup 
                name="job-experience-group"
                aria-labelledby="job-experience-group-label"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel control={<Radio/>} label='0-2' value='0-2'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10'></FormControlLabel>
            </RadioGroup>
        </FormControl>
        <FormControl>
            <FormLabel id="years-of-experience" error >
                Years Of Experience
            </FormLabel>
            <RadioGroup 
                name="job-experience-group"
                aria-labelledby="job-experience-group-label"
                value={value}
                onChange={handleChange}
                row
                color="secondary"
            >
                <FormControlLabel control={<Radio/>} label='0-2' value='0-2'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10'></FormControlLabel>
                <FormHelperText error>Invalid Selection</FormHelperText>
            </RadioGroup>
        </FormControl>
    </Box>
}