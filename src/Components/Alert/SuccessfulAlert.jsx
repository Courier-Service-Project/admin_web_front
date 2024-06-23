import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';

export default function SuccessfulAlert(props){

    return(
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: '#fff',
                borderRadius: '16px', 
                borderWidth: 5,
                shadowColor: '#D8FDFB',
                elevation: 20,
                shadowOpacity: 0.9,                
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2" color="#44D55" display="flex" alignItems="center">
                    <CheckCircleOutlineIcon sx={{ ml: 14 , mr:2, color: 'green'}} /> Successfully Submit
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, ml:7 }} color="#044B55">
                    {props.success}
                </Typography>
                <Button onClick={props.onclick1} variant="contained" sx={{ mt: 2, ml:14, bgcolor:"#0A4851",
                ":hover": {
                    bgcolor: "#12636E",
                    color: "#fff",
                    },
                }}  >
                    Okay
                </Button>
            </Box>
        </Modal>
    )
}