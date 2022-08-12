import { Box, Button } from "@mui/material";

function Profile({ onLogout }) {

    async function handleLogout() {
        const response = await fetch("/logout", {
            method: "DELETE"
        });

        if (response.ok) {
            onLogout(null)
            window.location.reload();
        }
    }

    return (
        <Box>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </Box>
    )
}

export default Profile;