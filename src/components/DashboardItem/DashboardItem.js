import React, { useState } from "react";

import "./DashboardItem.css";
import NewPayment from "../Newpayment/NewPayment";
import NewFraud from "../NewFraud/NewFraud";
import { Button } from "@mui/material";
import BasicTable from "./table";
import Popup from "../Popup/Popup";
import PopupNewFraud from "../PopupNewFraud/PopupNewFraud";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  let login = localStorage.getItem("login")
  
  const [openPopup, setOpenPopup] = useState(false);
  const [fraud, setFraud] = useState(false);

  const logoutFnc = () => {
    
    localStorage.setItem("login", null);
    localStorage.clear("token");
    
    navigate("/");
  };

  if(login=="true"){
  return (
    <>
      <div className="home-page">
        <h1 style={{ color: "#1976d2", fontSize: 20 }}>
          Welcome Dashboard
        </h1>
        <div className="logoutbtn">
          <Button
            variant="contained"
            onClick={() => logoutFnc()}
            className="logoutBtn"
            size="large"
          >
            Logout
          </Button>
        </div>
        <hr />
        <div className="register-button">
          <Button variant="contained" onClick={() => setOpenPopup(true)}>
            New Payment
          </Button>

          <Button variant="contained" onClick={() => setFraud(true)}>
            Report Fraud !
          </Button>
        </div>

        <div>
          <BasicTable />
        </div>

        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <NewPayment />
        </Popup>

        <PopupNewFraud fraud={fraud} setFraud={setFraud}>
          <NewFraud />
        </PopupNewFraud>
      </div>
    </>
  );
  }
  else{
    return(
      <div>
        You are logged out !
      </div>
    )
  }
}

export default HomePage;
