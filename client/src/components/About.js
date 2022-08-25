import { Box, Typography, Link } from "@mui/material";

function About() {
    return (
        <Box>
            <Typography variant="h3">
                Email
            </Typography>
            <Typography variant="h7">
                terrencejung928@gmail.com
            </Typography>

            <Typography variant="h3">
                LinkedIn
            </Typography>
            <Link href="https://www.linkedin.com/in/terrencejung/">Linkedin</Link>
        </Box>
        
    )
}

export default About;