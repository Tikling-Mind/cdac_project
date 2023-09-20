import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { IP_ADDRS } from "../../../service/BaseAddress";

function Admin() {
    const [admin, setAdmin] = useState({
        email: "",
        id: "",
        jwt: ""
    });

    const [loggedIn, setLoggedIn] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {       
        let adm = JSON.parse(sessionStorage.getItem("admin"));
        if (adm == null) {
            swal("Not Authorized", "", "error");
        }
        else {
            setLoggedIn(true);
            setAdmin({
                id: adm.id,
                email: adm.email,
                jwt: adm.jwt
            });
        }
    }, [])

    const cardStyle = {
        cursor: "pointer",
        minHeight: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'primary.main', // Default Material-UI primary color
        color: "text.primary", // Default Material-UI text color
        opacity: 0.8,
    };

    const navigateToPage = (page) => {
        navigate(page);
    };

    return (
        <>
            {loggedIn ? (
                <>
                    <Container>
                        <Typography variant="h3" align="center" gutterBottom>
                            Hello, Admin
                        </Typography>

                        <hr className="my-4" />

                        <Container maxWidth="md" style={{ marginBottom: "50px" }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Card sx={cardStyle} onClick={() => navigateToPage("getAllApprovedVendors")}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Approved Vendors
                                            </Typography>
                                            <Typography variant="body2">
                                                List of All Vendors
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card sx={cardStyle} onClick={() => navigateToPage("getAllCustomers")}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Get All Customers
                                            </Typography>
                                            <Typography variant="body2">
                                                List of All Customers
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card sx={cardStyle} onClick={() => navigateToPage("getAllUnApprovedVendors")}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Unapproved Vendors
                                            </Typography>
                                            <Typography variant="body2">
                                                List of all Unapproved Vendors
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card sx={cardStyle} onClick={() => navigateToPage("getAllBlockedVendors")}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Blocked Vendors
                                            </Typography>
                                            <Typography variant="body2">
                                                List of Blocked Vendors
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card sx={cardStyle} onClick={() => navigateToPage("getAllBlockedCustomers")}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Blocked Customers
                                            </Typography>
                                            <Typography variant="body2">
                                                List of all Customers
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </Container>
                </>
            ) : (
                <Typography variant="h3" align="center" gutterBottom>
                    Please Log in to Access this page
                </Typography>
            )}
        </>
    );
}

export default Admin;
