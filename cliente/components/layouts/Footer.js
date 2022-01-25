import React from 'react';
import Copyright from '../ui/Copyright';

// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return ( 
        <Box
            component="footer"
            sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: '#000000'
            }}
        >
            <Container fixed>
                <Typography sx={{textAlign: 'center'}} variant="h5" component="div">
                    <InstagramIcon sx={{color: '#fff'}} />
                    <FacebookIcon sx={{color: '#fff', marginRight: 1, marginLeft: 1}} />
                    <TwitterIcon sx={{color: '#fff'}} />
                </Typography>
                <Copyright sx={{color: '#fff'}} />
            </Container>
        </Box>
     );
}
 
export default Footer;