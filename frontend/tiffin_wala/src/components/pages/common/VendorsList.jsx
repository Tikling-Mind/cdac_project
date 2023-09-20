import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import swal from 'sweetalert';
import { IP_ADDRS } from '../../../service/BaseAddress';
import vendorService from '../../../service/VendorService';

const VendorList = () => {
    const pincode = useParams().pincode ;
    const [vendorList, setVendorList] = useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const navigate = useNavigate();
    const vendorURL = IP_ADDRS + '/vendor/';

    useEffect(() => {
        vendorService
            .getAllApprovedVendors()
            .then((res) => {
                console.log(pincode) ;
                setVendorList(res.data.filter((vendor)=>vendor.address.pincode==pincode));
                console.log(vendorList) ;
            })
            .catch((err) => {
                console.error(err);
                swal('Something went wrong', '', 'error');
            });
    }, [refreshFlag]);

    const handleVendorClick = (vendorId) => {
        // Redirect to the vendor details page or do something else when a vendor card is clicked
        navigate(`/vendorDetails/${vendorId}`);
    };

    return (
        <div>
            <Grid container spacing={2}>
                {vendorList.map((vendor) => (
                    <Grid item xs={12} sm={6} md={4} key={vendor.id}>
                        <Card onClick={() => handleVendorClick(vendor.id)} style={{ cursor: 'pointer' }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {vendor.firstName + " "+ vendor.lastName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Address:
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {vendor.address.line1}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {vendor.address.line2}
                            </Typography>
                        </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default VendorList;
