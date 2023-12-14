import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



export default function BasicTable() {
  const login = localStorage.getItem("login");
  const [data, setData] = useState([]);
  // const [deviceDetails, setDeviceDetails] = useState({});
  // const [openLinkDevicePopUp, setOpenLinkDevicePopUp] = useState(false);

  useEffect(() => {
    getFraudList();
  }, []);

  const getFraudList = async() => {
    let result = await axios.get('http://localhost:9321/data', {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
      
    })
    
    console.log(result.data)
    setData(result.data);
  }

  // const handleLinkDevice = (row) => {
  //   setDeviceDetails(row);
  //   setOpenLinkDevicePopUp(true);
  // };

  return (
    <>
      <h1 style={{ color: "#1976d2", fontSize: 20 }}>Reported Frauds</h1>
      <br></br>
      {/* todo: fix the css */}
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="thead-dark">
            <TableRow>
              <TableCell align="left">Unique ID</TableCell>
              <TableCell align="left">Reported UPI ID</TableCell>
              <TableCell align="left">Number of counts Reported</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.alloted_to_user}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="left">
                  {row.bad_upiId}
                </TableCell>
                <TableCell align="left">{row.count}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <PopupLinkNewDevice
        openLinkDevicePopUp={openLinkDevicePopUp}
        setOpenLinkDevicePopUp={setOpenLinkDevicePopUp}
      >
        <LinkNewDeviceForm deviceDetails={deviceDetails} />
      </PopupLinkNewDevice> */}
    </>
  );
}
