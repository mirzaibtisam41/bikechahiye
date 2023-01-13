import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { serverURL } from '../../common/api';
import { Container } from '@mui/material';
import moment from 'moment/moment';

export default function MediaCard({ bike }) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 175 }}
                image={`${serverURL}${bike?.usedBikePic}`}
                title="bike"
            />
            <CardContent>
                <Container
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: "10px",
                        padding: '0'
                    }}
                >
                    <Typography variant="h6">
                        {`${bike?.brand}${"-"}${bike?.category[0]}`}
                    </Typography>
                    <Typography variant="h6">
                        {bike?.bikeNumber}
                    </Typography>
                </Container>
                <Container
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: "10px",
                        padding: '0'
                    }}
                >
                    <Typography sx={{ color: "#dc3545" }}>
                        {bike?.finalPrice} PKR
                    </Typography>
                    <Typography sx={{ color: "green" }}>
                        {bike?.city}
                    </Typography>
                </Container>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    className="justify"
                    sx={{ height: '85px' }}
                >
                    {`${bike?.detail.substring(0, 160)}${bike?.detail.length > 160 ? "..." : ""}`}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {moment(bike?.createdAt).format('LL')}
                </Typography>
                <Button size="small">Owner Contact</Button>
            </CardActions>
        </Card>
    );
}