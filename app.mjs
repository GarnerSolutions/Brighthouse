import fetch from 'node-fetch';


const API_URL = 'https://brighthousesolar.fieldroutes.com/api';
const API_KEY = '2l6dhlhl6tltpfu98dpvb6770a0mrro8i1tcctk66ksurks44ceohif28o30um17';
const API_TOKEN = '8ebgdsgiihnutdglcponabcvadj5166nmob6m8g2gnene3v0eqvb8q2385ouedcu';
let salesRepNames = {};

async function fetchEmployeeName(employeeID) {
    const response = await fetch(`${API_URL}/employee/${employeeID}`);
    const data = await response.json();
    console.log("Employee data for ID " + employeeID, data);  // Logging the response
    return `${data.fname} ${data.lname}`;
}

fetchEmployeeName('10004');  // replace '10004' with a valid employee ID.
