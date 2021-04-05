import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
    const fetchAPI = async () => {
        setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);

    
    return (
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" >
            <option value="">India</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;