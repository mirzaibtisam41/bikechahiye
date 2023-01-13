import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ filterByBrand }) {
    return (
        <Autocomplete
            style={{ width: '93%' }}
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Brands" />}
            onChange={(a, v) => filterByBrand(v.label)}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'Honda' },
    { label: 'United' },
    { label: 'Metro' },
    { label: 'Pak Hero' },
    { label: 'Ravi' },
    { label: 'Road Prince' },
    { label: 'Super Asia' },
    { label: 'Power' },
    { label: 'Osaka' },
    { label: 'Jolta' },
];