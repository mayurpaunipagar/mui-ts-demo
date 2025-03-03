import { Typography } from "@mui/material"

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">H1 Heading</Typography>
            <Typography variant="h2">H2 Heading</Typography>
            <Typography variant="h3">H3 Heading</Typography>
            <Typography variant="h4" component={"h1"} gutterBottom>H4 Heading</Typography>
            <Typography variant="h5">H5 Heading</Typography>
            <Typography variant="h6">H6 Heading</Typography>
            <Typography variant="subtitle1">Sub title 1</Typography>
            <Typography variant="subtitle2">Sub title 2</Typography>
            <Typography variant="body1">body 1</Typography>
            <Typography variant="body2">body 2</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
            <Typography variant="body2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptate vel illo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae ut
                reiciendis voluptatibus maiores alias consequatur aut perferendis dolor beatae vitae dicta sunt explicabo.
            </Typography>


        </div>
    )
}