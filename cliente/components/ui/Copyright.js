import React from 'react';

// Material-UI
import Typography from '@mui/material/Typography';

const Copyright = props => {
    return ( 
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
            Jamoink
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
     );
}
 
export default Copyright;