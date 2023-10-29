// apiHelpers.js

// Fetch employee name based on employeeID
async function fetchsetterName(employeeID, params) {
    try {
        const url = new URL(`https://brighthousesolar.fieldroutes.com/api/employee/${employeeID}`);
        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url.toString(), {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        if (responseData && responseData.success) {
            const employeeData = responseData.employee; // Extract employee data
            // Assuming the API returns data with 'fname' and 'lname' properties
            if (employeeData && employeeData.fname && employeeData.lname) {
                return `${employeeData.fname} ${employeeData.lname}`;
            } else {
                console.error('Unexpected data format:', responseData);
                return 'N/A';
            }
        } else {
            console.error('Error from API:', responseData.errorMessage);
            return 'N/A';
        }
    } catch (error) {
        console.error('Error fetching employee data:', error);
        return 'N/A';
    }
}

// You can add more functions here if needed

// Export the functions to make them available for import in other files
export { fetchsetterName };
