import React from 'react'

const Countries = ({country}) => {
    return (
        <div>
            <h5>{country.origin}</h5>
            <h5>{country.destination}</h5>
            <h6>">{country.allowed}</h6>
            <p>{country.info}</p>
            <p>">{country.passport}</p>
        </div>
    )
};

export default Countries