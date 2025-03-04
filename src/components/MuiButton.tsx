import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup,ToggleButton } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon  from "@mui/icons-material/FormatUnderlined"
import { useState } from "react"
export const MuiButton = () => {
    const [formats,setFormats]=useState<string | null>(null)
    
    console.log({
        formats
    })
    const handleFormatChange = (
        _event:React.MouseEvent<HTMLElement>,updatedFormats:string | null)=>{
        setFormats(updatedFormats)
    }
    // const [formats2,setFormats2]=useState<string | null>(null)
    // console.log({
    //     formats2
    // })
    // const handleFormatChange2 = (
    //     _event:React.MouseEvent<HTMLElement>,
    //     updatedFormats2:string | null)=>{
    //     setFormats2(updatedFormats2)
    // }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"}>
                <Button variant='text' href='https://google.com'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Infor</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="contained" color="error">Success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction={"row"}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' startIcon={<SendIcon />} onClick={() => { alert("Send Button Clicked") }}>Send</Button>
                <Button variant='contained' startIcon={<SendIcon />} disableRipple>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton aria-label="send" color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant='contained'>
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant='outlined'>
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant='text' orientation="vertical">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant='contained' orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
                    <Button onClick={() => { alert("left clicked") }} >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"}>
                <ToggleButtonGroup 
                aria-label="text-formatting" 
                value={formats} 
                onChange={handleFormatChange} 
                size="small" 
                color="success"
                orientation="vertical">
                    <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label="italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            {/* <Stack direction={"row"}>
                <ToggleButtonGroup 
                aria-label="text-formatting" 
                value={formats2} 
                onChange={handleFormatChange2} 
                size="small" 
                color="success"
                orientation="vertical">
                    <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label="italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack> */}
        </Stack>

    )
}