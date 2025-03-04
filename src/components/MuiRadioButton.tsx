import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio
} from "@mui/material"

export const MuiRadioButton = () => {
    return <Box>
        <FormControl>
            <FormLabel id="years-of-experience">
                Years Of Experience
            </FormLabel>
            <RadioGroup 
                name="job-experience-group"
                aria-labelledby="job-experience-group-label"

            >
                <FormControlLabel control={<Radio/>} label='0-2' value='0-2'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10'></FormControlLabel>
            </RadioGroup>
        </FormControl>
    </Box>
}