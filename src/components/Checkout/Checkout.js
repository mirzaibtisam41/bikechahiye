
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const theme = createTheme();

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {
                            activeStep === 0 &&
                            <AddressForm
                                handleNext={handleNext}
                                handleBack={handleBack}
                                activeStep={activeStep}
                                steps={steps}
                            />
                        }
                        {
                            activeStep === 1 &&
                            <PaymentForm
                                handleNext={handleNext}
                                handleBack={handleBack}
                                activeStep={activeStep}
                                steps={steps}
                            />
                        }
                        {
                            activeStep === 2 &&
                            <Review
                                handleNext={handleNext}
                                handleBack={handleBack}
                                activeStep={activeStep}
                                steps={steps}
                            />
                        }
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}