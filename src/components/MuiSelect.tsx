import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"

export const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const [countries,setCountries]=useState<string[]>([])
    console.log({countries})
    const handleChange2=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value;
        setCountries(typeof value === 'string'? value.split(','):value);
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
    return <Box width='250px' >
        {/* <TextField //single select drop down
            label="Select Country"
            value={country}
            onChange={handleChange}
            select
            fullWidth
        >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">Usa</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
        </TextField> */}
        {/* // for multiselect drop down follow below */}
        <TextField //single select drop down
            label="Select Country"
            value={countries}
            onChange={handleChange2}
            select
            fullWidth
            SelectProps={{
                multiple: true
            }}
            size="small"
            color="secondary"
            helperText="Please select your country"
        >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">Usa</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
        </TextField>
    </Box>
}