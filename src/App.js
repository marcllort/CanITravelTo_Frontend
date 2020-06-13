import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import {submit} from "./api/ApiCalls";
import CountrySelect from "./components/CountrySelector";

function App() {
  return (
    <div className="App">
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
