import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="">
        <option value="">Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;