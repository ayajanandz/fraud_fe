import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import "./PopupNewDevice.css";

function PopupNewDevice(props) {
  const { children, fraud, setFraud } = props;

  return (
    <Dialog open={fraud}>
      <DialogTitle>
        <div>Reporting Fraud</div>
      </DialogTitle>

      <DialogContent>{children}</DialogContent>
      <hr />
      <div className="cancelbtn">
        <Button variant="outlined" onClick={() => setFraud(false)}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
}

export default PopupNewDevice;
