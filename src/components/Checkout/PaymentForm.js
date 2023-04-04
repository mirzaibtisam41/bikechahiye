import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import BankList from './BankList';

export default function PaymentForm({ handleNext, activeStep, steps, receipt, setReceipt }) {
    const [payment, setPayment] = useState(0);
    const [error, setError] = useState(null);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{ marginTop: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}
                >
                    <FormControlLabel onChange={() => setPayment(0)} checked={payment === 0 && true} value="female" control={<Radio />} label="Bank Account" />
                    <FormControlLabel onChange={() => setPayment(1)} checked={payment === 1 && true} value="male" control={<Radio />} label="JazzCash/EasyPaisa" />
                </RadioGroup>
                <Container style={{ marginTop: '1rem' }}>
                    <BankList payment={payment} />
                    <div className='mt-3' style={{ textAlign: 'left' }}>
                        <Typography sx={{ marginBottom: '10px', marginLeft: '10px', color: '#dc3545', fontWeight: 'bold' }}>Upload Paid Receipt</Typography>
                        <TextField error={error === true} onChange={(e) => {
                            setReceipt(e.target.files[0]);
                            setError(false);
                        }} type='file' id="outlined-basic" variant="outlined" />
                        {error === true && <Typography sx={{ marginBottom: '10px', marginLeft: '10px', color: '#dc3545' }}>Receipt Required*</Typography>}
                    </div>
                </Container>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button
                        variant="contained"
                        color='error'
                        onClick={() => {
                            if (receipt === null) {
                                setError(true);
                            }
                            else {
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