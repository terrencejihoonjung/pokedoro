import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Profile({ onLogout, hasPokemon }) {
    const navigate = useNavigate();

    if (!hasPokemon) {
        navigate("/choose-pokemon")
    }

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