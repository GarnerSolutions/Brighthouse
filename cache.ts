import apiModule from "./apiModule.js"
import { API_KEY, API_TOKEN } from "./config.js";


export const Employees_cache: Map<string, string> = new Map()

async function fetchEmployees() {

    const paramsSearch = {
        authenticationKey: API_KEY,
        authenticationToken: API_TOKEN,
        includeData: 1
    };

    const responseJSON = await apiModule.call('/employee/search', 'post', paramsSearch);

    const paramsGet = {
        authenticationKey: API_KEY,
        authenticationToken: API_TOKEN,
        includeData: 1,
        employeeIDs: responseJSON.employeeIDs
    };




    const employeeData = await apiModule.call('/employee/get', 'post', paramsGet);

    employeeData.forEach(element => {
        Employees_cache.set(element.employeeID, `${element.fname} ${element.lname}`)
    });
}

fetchEmployees();




export const Customers_cache: Map<string, string> = new Map()

async function fetchCustomers() {

    const paramsSearch = {
        authenticationKey: API_KEY,
        authenticationToken: API_TOKEN,
        includeData: 1
    };

    const responseJSON = await apiModule.call('/customer/search', 'post', paramsSearch);

    const paramsGet = {
        authenticationKey: API_KEY,
        authenticationToken: API_TOKEN,
        includeData: 1,
        customerIDs: responseJSON.customerIDs
    };




    const customerData = await apiModule.call('/customer/get', 'post', paramsGet);

    customerData.forEach(element => {
        Customers_cache.set(element.employeeID, `${element.fname} ${element.lname}`)
    });
}

fetchCustomers();
