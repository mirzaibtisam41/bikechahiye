import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from 'react-redux';
import SelectBox from './SelectBox';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ activeCompare, setActiveCompare }) {
    const { brands } = useSelector((state) => state.products);
    const [brand1, setBrand1] = React.useState('Brand/Model');
    const [brand2, setBrand2] = React.useState('Brand/Model');
    const [power1, setPower1] = React.useState('Variant');
    const [power2, setPower2] = React.useState('Variant');
    const [variants, setVariants] = React.useState([]);
    const [Compare, setCompare] = useState(false);

    const handleClose = () => {
        setActiveCompare(false);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={activeCompare}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', backgroundColor: '#dc3545' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Compare Bikes
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginTop: '1rem',
                        '& > :not(style)': {
                            m: 1,
                            p: 3,
                            width: '300px'
                        },
                    }}
                >
                    <Paper
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            border: '1px solid grey',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        }}>+</div>
                        <span style={{ margin: '5px 0px 20px 0px' }}>Add Bike</span>
                        <SelectBox
                            brands={brands}
                            brand={brand1}
                            power={power1}
                            setBrand={setBrand1}
                            setPower={setPower1}
                        />
                    </Paper>
                    <Paper
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            border: '1px solid grey',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        }}>+</div>
                        <span style={{ margin: '5px 0px 20px 0px' }}>Add Bike</span>
                        <SelectBox
                            brands={brands}
                            brand={brand2}
                            power={power2}
                            setBrand={setBrand2}
                            setPower={setPower2}
                        />
                    </Paper>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Button
                        style={{
                            width: '150px',
                        }}
                        onClick={() => setCompare(!Compare)}
                        variant="contained" color='error'>
                        Compare Now
                    </Button>
                </div>
                {
                    Compare &&
                    <div style={{
                        width: '50%',
                        margin: 'auto',
                        padding: '1rem 0px'
                    }}>
                        <span style={{ fontWeight: 'bolder', fontSize: 'larger' }}>Basic Information</span>
                        <section style={{
                            borderBottom: '1px solid',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            marginTop: '2rem'
                        }}>
                            <span>Rs 1.66 Lakh</span>
                            <span style={{ color: '#b6b6b6', position: 'relative', bottom: '1.5rem' }}>On Road Price</span>
                            <span>Rs 1.66 Lakh</span>
                        </section>
                        <section style={{
                            borderBottom: '1px solid',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            marginTop: '2rem'
                        }}>
                            <span>Rs 1.66 Lakh</span>
                            <span style={{ color: '#b6b6b6', position: 'relative', bottom: '1.5rem' }}>On Road Price</span>
                            <span>Rs 1.66 Lakh</span>
                        </section>
                        <section style={{
                            borderBottom: '1px solid',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            marginTop: '2rem'
                        }}>
                            <span>Rs 1.66 Lakh</span>
                            <span style={{ color: '#b6b6b6', position: 'relative', bottom: '1.5rem' }}>On Road Price</span>
                            <span>Rs 1.66 Lakh</span>
                        </section>
                        <section style={{
                            borderBottom: '1px solid',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            marginTop: '2rem'
                        }}>
                            <span>Rs 1.66 Lakh</span>
                            <span style={{ color: '#b6b6b6', position: 'relative', bottom: '1.5rem' }}>On Road Price</span>
                            <span>Rs 1.66 Lakh</span>
                        </section>
                        <section style={{
                            borderBottom: '1px solid',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            marginTop: '2rem'
                        }}>
                            <span>Rs 1.66 Lakh</span>
                            <span style={{ color: '#b6b6b6', position: 'relative', bottom: '1.5rem' }}>On Road Price</span>
                            <span>Rs 1.66 Lakh</span>
                        </section>
                    </div>
                }
            </Dialog>
        </div>
    );
}