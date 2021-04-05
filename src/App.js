import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data: data })
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    }

    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <Chart/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
            </div>
        )
    }
}


export default App;