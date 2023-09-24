import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, AppBar, Toolbar, Box, ButtonGroup } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import vendorService from '../../../service/VendorService';

const UnApprovedVendorList = () => {
  const [vendorList, setVendorList] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let admin = JSON.parse(sessionStorage.getItem('admin'));
    vendorService
      .getAllUnApprovedVendors(admin.jwt)
      .then((res) => {
        console.log(res.data);
        setVendorList(res.data);
      })
      .catch((err) => {
        console.log(err);
        swal(err.response.data.message, '', 'error');
      });
  }, [refreshFlag]);

  const approveVendor = (d) => {
    let admin = JSON.parse(sessionStorage.getItem('admin'));
    vendorService
      .approveVendor(d.id, d, admin.jwt)
      .then((res) => {
        setRefreshFlag(!refreshFlag);
      })
      .catch((err) => {
        swal('Unable to Approve', '', 'error');
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
            All UnApproved Vendors
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
                        <Button color="error" onClick={() => approveVendor(v)}>
                          Approve
                        </Button>
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

export default UnApprovedVendorList;
