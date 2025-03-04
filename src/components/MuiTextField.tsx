import { InputAdornment, Stack, TextField } from "@mui/material"

export const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={2}>

                {/* <TextField label="name"/> //default is outlined */}

                <TextField label="name" variant="standard" />

            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="name" variant="outlined" />
                <TextField label="name" variant="filled" />
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="small secondary" color="secondary" size="small" />
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="form input " color="secondary" size="small" required />
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="password" type="password" helperText="Do not share your password with anyone" disabled/>
                <TextField label="Read Only" InputProps={{readOnly:true}}/>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}>

                </TextField>
                <TextField label="Weight" InputProps={{
                    endAdornment:<InputAdornment position="end">KG</InputAdornment>
                }}>

                </TextField>
                

            </Stack>

        </Stack>
    )
}