import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function PopupContact(props) {
  const { openpopup, setopenpopup} = props;

  const [formdata,setformdata]=React.useState({
    cemail:"",
    ctele:""
  })

  React.useEffect(() => {
    const id = 1;
    axios
      .get("http://localhost:3000/src/routes/profileDget/" + id)
      .then(function (response) {
        if (response) {
         setFname(response.data.data[0].email);
          setLname(response.data.data[0].tele);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const changecontact = () => {
    axios
      .post("http://localhost:3000/src/routes/admin/changecontact", {
        id:1,
        email:formdata.cemail,
        tele:formdata.ctele
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    
      window.location.reload();

    handleClose();
  };

  const handleClose = () => {
    setopenpopup(false);
  };

  const changebtn = {
    px: 2,
    py: 0.8,
    my: 0.5,
    textTransform: "none",
    bgcolor: "#26a69a",
    color: "#fff",
    ":hover": {
      bgcolor: "#80cbc4",
      color: "#000",
    },
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openpopup}
      >
        <DialogTitle sx={{ p: 1.5 }}>
          <Typography variant="h6">Edit Contact Info</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <TextField
            hiddenLabel
            id="outlined-basic"
            label="Change email"
            variant="outlined"
            size="small"
            sx={{ mr: 3, mb: 1.5 }}
            defaultValue={pemail}
            onChange={(event)=>setformdata({...formdata,cemail:event.target.value})}
          />
          <TextField
            hiddenLabel
            id="outlined-basic"
            label="Change Tele"
            variant="outlined"
            size="small"
            defaultValue={ptele}
            onChange={(event)=>setformdata({...formdata,ctele:event.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={changebtn} onClick={changecontact}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}