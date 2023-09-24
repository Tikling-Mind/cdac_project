import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, AppBar, Toolbar, Box, ButtonGroup } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import customerService from '../../../service/CustomerService';

const BlockedCustomersList = () => {
  const [customersList, setCustomersList] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let admin = JSON.parse(sessionStorage.getItem('admin'));
    customerService
      .getCustomerList(admin.jwt)
      .then((res) => {
        let blockedCustomersList = res.data.filter((cust) => cust.blocked);
        console.log(res.data);
        setCustomersList(blockedCustomersList);
      })
      .catch((err) => {
        console.log(err);
        swal('Something went Wrong', '', 'error');
      });
  }, [refreshFlag]);

  const unBlockCustomer = (d) => {
    let admin = JSON.parse(sessionStorage.getItem('admin'));
    customerService
      .changeBlockingStatus(d, admin.jwt)
      .then((res) => {
        setRefreshFlag(!refreshFlag);
      })
      .catch((err) => {
        swal('Unable to Unblock', '', 'error');
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
            All Blocked Customers
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
                {customersList.map((v, i) => (
                  <TableRow key={v.id}>
                    <TableCell>{v.id}</TableCell>
                    <TableCell>{v.firstName}</TableCell>
                    <TableCell>{v.lastName}</TableCell>
                    <TableCell>{v.email}</TableCell>
                    <TableCell>
                      <ButtonGroup variant="contained" size="small">
                        <Button color="error" onClick={() => unBlockCustomer(v)}>
                          UnBlock
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

export default BlockedCustomersList;
