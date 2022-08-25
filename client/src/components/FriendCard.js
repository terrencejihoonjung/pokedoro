import { Paper, Avatar, Typography, Box, IconButton } from "@mui/material";
import { Delete } from '@mui/icons-material';

function FriendCard({ friend, handleDeleteFriend }) {
    return (
        <Paper sx={{height: 'auto', width: '7vw', textAlign:'center', pt: 1, pb:1, mr: 2}}>
            <Avatar
                alt={friend.username}
                src={""}
                sx={{ width: 90, height: 90, margin:'auto', mb: '1vh'}}
            >
                {friend.username[0]}
            </Avatar>
            
            <Box>
                <Typography variant="h8">
                    {friend.username}
                </Typography>

                <IconButton onClick={() => handleDeleteFriend}>
                    <Delete size="small" />
                </IconButton>
            </Box>
            
        </Paper>
    )
}

export default FriendCard;