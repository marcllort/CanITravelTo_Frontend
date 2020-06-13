
export function submit() {
    console.log("perro!")

   /* var unirest = require('unirest');

    unirest
        .('http://35.180.85.2:8080/travel')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
        .send({ "destination": "Spain", "origin": "France" })
        .then((response) => {
            console.log(response.body)
        })*/

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = "{\"destination\": \"Spain\",\"origin\": \"France\"}";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

fetch("http://35.180.85.2:8080/travel", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
