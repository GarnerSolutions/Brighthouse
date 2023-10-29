import { stringifier } from "csv/.";

interface fieldroutes {
    setterName: string;
    closerName: string;
    appointmentStart: Date;
    appointmentEnd: Date;

}

export async function getFieldroutes(): Promise < fieldroutes[] > {
    try {
        
    } catch (error) {
        console.log(error)
        return[]
    }
}

async function fetchAppointments() {
    
    const params = {
        date: Date.now(),
        authenticationKey: API_KEY,
        authenticationToken: API_TOKEN,
        includeData: 1
    };

    try {
        // Make the API call using apiModule
        const responseJSON = await apiModule.call('/appointment/search', 'post', params);
        
        // Log the response to inspect it
        console.log('API Response:', responseJSON);

        // Check the API response and proceed with processing if it's valid
        if (responseJSON && responseJSON.appointments && Array.isArray(responseJSON.appointments)) {
            // Iterate through appointments and fetch employee names
            for (const appointment of responseJSON.appointments) {
                const setterName = await fetchsetterName(appointment.employeeID, params);
                appointment.setterName = setterName; // Update setterName in appointment
                const closerName = await fetchcloserName(appointment.assignedTech, params);
                appointment.closerName = closerName; // Update setterName in appointment
            }

            displayAppointments(responseJSON.appointments);
        } else {
            console.error('Unexpected data format:', responseJSON);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}