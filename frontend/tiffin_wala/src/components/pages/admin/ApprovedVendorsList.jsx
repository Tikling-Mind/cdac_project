import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, AppBar, Toolbar, Box, ButtonGroup } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import vendorService from '../../../service/VendorService';
import { WidthNormal } from '@mui/icons-material';

const ApprovedVendorList = () => {
  const [vendorList, setVendorList] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let admin = JSON.parse(sessionStorage.getItem('admin'));
    vendorService
      .getAllApprovedVendors(admin.jwt)
      .then((res) => {
        console.log(res.data);
        setVendorList(res.data);
      })
      .catch((err) => {
        console.log(err);
        swal('Something went Wrong', '', 'error');
      });
  }, [refreshFlag]);

  const changeBlockingStatus = (d) => {
    let admin = JSON.parse(sessionStorage.getItem('admin'));
    d.blocked = !d.blocked;
    vendorService
      .changeBlockingStatus(d, admin.jwt)
      .then((res) => {
        setRefreshFlag(!refreshFlag);
      })
      .catch((err) => {
        swal('Unable to Change Status', '', 'error');
      });
  };

  const handleBackButtonClick = () => {
    navigate('/admin');
  };

  return (
    <>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <IconButton onClick={handleBackButtonClick} edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All Approved Vendors
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Box sx={{ mb: 4 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email Id</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {vendorList.map((v, i) => (
                  <TableRow key={v.id}>
                    <TableCell>{v.id}</TableCell>
                    <TableCell>{v.firstName}</TableCell>
                    <TableCell>{v.lastName}</TableCell>
                    <TableCell>{v.email}</TableCell>
                    <TableCell>
                      <ButtonGroup variant="contained" size="small">
                        {v.blocked ? (
                          <Button color="success" minWidth="3px" fullWidth="3px" onClick={() => changeBlockingStatus(v)}>
                            Unblock 
                          </Button>
                        ) : (
                          <Button color="error" onClick={() => changeBlockingStatus(v)}>
                            Block
                          </Button>
                        )}
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default ApprovedVendorList;
