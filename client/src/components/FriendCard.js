import { Paper, Avatar, Typography } from "@mui/material";

function FriendCard({ user }) {
    return (
        <Paper sx={{height: 'auto', width: '7vw', textAlign:'center', pt: 1, pb:1, mr: 2}}>
            <Avatar
                alt={user.username}
                src={""}
                sx={{ width: 90, height: 90, margin:'auto', mb: '1vh' }}
            >
                {user.username[0]}
            </Avatar>
            
            <Typography variant="h8">
                {user.username}
            </Typography>
        </Paper>
    )
}

export default FriendCard;