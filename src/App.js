import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import {Helmet} from "react-helmet";
import {submit} from "./api/ApiCalls";

import CountrySelect from "./components/CountrySelector";

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8"/>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
                <title>CANITRAVEL</title>
            </Helmet>
            <header className="App-header">
                <p>CanITravelTo</p>
                <CountrySelect/>
                <br/>
                <CountrySelect/>
                <br/>

                <Button variant="contained" color="primary" onClick={() => submit()}>
                    Submit
                </Button>
            </header>
        </div>
    );
}


export default App;
