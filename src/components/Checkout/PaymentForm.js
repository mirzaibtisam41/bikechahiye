import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function PaymentForm({ handleNext, handleBack, activeStep, steps }) {
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
                    <FormControlLabel value="female" control={<Radio />} label="Jazzcash" />
                    <FormControlLabel value="male" control={<Radio />} label="EasyPaisa" />
                </RadioGroup>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    {activeStep !== 0 && (
                        <Button color='error' onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            Back
                        </Button>
                    )}

                    <Button
                        variant="contained"
                        color='error'
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                    >
                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                </Box>
            </Grid>
        </React.Fragment>
    );
}