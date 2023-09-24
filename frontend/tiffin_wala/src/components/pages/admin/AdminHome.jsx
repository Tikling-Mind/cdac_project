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
        background: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), rgba(255, 255, 255, 0.05)',
        color: "text.primary",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out", // Add a transition for the zoom effect
        "&:hover": {
            transform: "scale(1.05)", // Zoom in by 5% on hover
        },
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
                                            <Typography variant="body2" align="center">
                                                Show all approved vendors
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card sx={cardStyle} onClick={() => navigateToPage("getAllCustomers")}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Customers
                                            </Typography>
                                            <Typography variant="body2" align="center">
                                                Show All Customers
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
                                            <Typography variant="body2" align='center'>
                                                Show all Unapproved Vendors
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
                                            <Typography variant="body2" align="center">
                                                Show all Customers
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
                                            <Typography variant="body2" align="center">
                                                Show all Blocked Vendors
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
