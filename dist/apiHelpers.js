"use strict";
// apiHelpers.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchsetterName = void 0;
// Fetch employee name based on employeeID
function fetchsetterName(employeeID, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = new URL(`https://brighthousesolar.fieldroutes.com/api/employee/${employeeID}`);
            url.search = new URLSearchParams(params).toString();
            const response = yield fetch(url.toString(), {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const responseData = yield response.json();
            if (responseData && responseData.success) {
                const employeeData = responseData.employee; // Extract employee data
                // Assuming the API returns data with 'fname' and 'lname' properties
                if (employeeData && employeeData.fname && employeeData.lname) {
                    return `${employeeData.fname} ${employeeData.lname}`;
                }
                else {
                    console.error('Unexpected data format:', responseData);
                    return 'N/A';
                }
            }
            else {
                console.error('Error from API:', responseData.errorMessage);
                return 'N/A';
            }
        }
        catch (error) {
            console.error('Error fetching employee data:', error);
            return 'N/A';
        }
    });
}
exports.fetchsetterName = fetchsetterName;
