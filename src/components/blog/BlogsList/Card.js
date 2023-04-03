import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ReactHtmlParser from "react-html-parser";

export default function MediaCard({ item }) {

    return (
        <Card sx={{ maxWidth: 345, mb: '1rem' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={item?._embedded["wp:featuredmedia"][0].source_url}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item?.title?.rendered}
                </Typography>
                <Typography className='justify' variant="body2" color="text.secondary">
                    {ReactHtmlParser(
                        `${item?.content?.rendered?.substring(0, 200)}...`
                    )}
                </Typography>
            </CardContent>
            <CardActions style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <a
                    style={{
                        color: '#0353a5'
                    }}
                    target='_blank' href={item?.link}>Learn More</a>
            </CardActions>
        </Card>
    );
}