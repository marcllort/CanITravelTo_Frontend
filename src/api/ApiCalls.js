export function submit() {

    const origin = document.getElementById('countrySelectorId2').value;
    const destination = document.getElementById('countrySelectorId4').value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers");

    const raw = "{\"destination\": \"" + destination + "\",\"origin\": \"" + origin + "\"}";

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://canitravelto.wtf/travel", requestOptions)
        .then(response => {
            response.json().then(json => {
                console.log(response);


                document.getElementById('infoCountry').innerHTML= `
                    <h5>` + "Origin: " + json.origin + `</h5>
                    <h5>` + "Destination: " + json.destination + `</h5>
                    <h5>` + "Allowed: " + json.allowed + `</h5>
                    <h5>` + "Info: " + json.info + `</h5>
                    <h5>` + "Passport: " + json.passport + `</h5>
              `;

            })
        })
        .catch(error => console.log('error', error));


}
