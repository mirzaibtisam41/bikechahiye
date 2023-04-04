import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import commaNumber from "comma-number";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShippingTable from './Table';

export default function Review({ handleNext, activeStep, steps, values, receipt }) {
    const storeCart = useSelector((state) => state.products.cart);
    const [totalPayment, setPayment] = useState(0);
    const [totalDiscount, setDiscount] = useState(0);

    useEffect(() => {
        calculatePayment();
    }, [storeCart]);

    const calculatePayment = () => {
        const payment = storeCart?.reduce((acc, next) => {
            return acc + next?.product?.price * next?.count;
        }, 0);
        setPayment(payment);

        const discount = storeCart?.reduce((acc, next) => {
            return acc + next?.product?.discount * next?.count;
        }, 0);
        setDiscount(discount);
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {storeCart?.map((p) => (
                    <ListItem key={p?.product?._id} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={p?.product?.name} secondary={`${p?.count} Unit`} />
                        <Typography variant="body2">{`PKR ${commaNumber(p?.product?.price)}`}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        PKR {commaNumber(totalPayment - totalDiscount)}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item container xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping Details
                    </Typography>
                    <Grid container>
                        <ShippingTable values={values} />
                    </Grid>
                </Grid>
                <Grid className='p-3 d-flex justify-content-between'>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment Receipt
                    </Typography>
                    <Grid>
                        <img style={{
                            width: '100px',
                            height: '100px'
                        }}
                            src={URL.createObjectURL(receipt)}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button
                        variant="contained"
                        color='error'
                        onClick={() => {
                            if (activeStep !== 2) {
                                handleNext();
                            }
                        }}
                        sx={{ mt: 3, ml: 1 }}
                    >
                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                </Box>
            </Grid>
        </React.Fragment>
    );
}