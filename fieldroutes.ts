import apiModule from "./apiModule.js"
import { Customers_cache, Employees_cache } from "./cache.js";
import { API_KEY, API_TOKEN } from "./config.js";
import { FieldroutesResponse } from "./fieldroutesTypes.js";


export interface fieldroutes {
    setterName: string;
    closerName: string;
    appointmentStart: Date;
    appointmentEnd: Date;
    name: string;
    notes: string

}



export async function getFieldroutes(): Promise<fieldroutes[]> {
    try {

        const apointsments = await fetchAppointments()

        if (!apointsments) {
            throw "No apointments got"
        }

        return apointsments.appointments.map(appointment => {

            const cn = Employees_cache.get(appointment.assignedTech)
            const sn = Employees_cache.get(appointment.employeeID)

            const name = Customers_cache.get(appointment.customerID)

            if (!cn || !sn || !name) {
                console.error("No employee ID for ", cn, sn, name);
                throw new Error("No employee ID")
            }


            return {
                appointmentStart: new Date(appointment.date + " " + appointment.start),
                appointmentEnd: new Date(appointment.date + " " + appointment.end),
                closerName: cn,
                setterName: sn,
                name: name,
                notes: appointment.appointmentNotes
            }
        })

    } catch (error) {
        console.log(error)
        return []
    }
}

async function fetchAppointments(): Promise<FieldroutesResponse | null> {

    const params = {
        dateUpdated: new Date(), // need to format date to correct string 2016-05-13
        authenticationKey: API_KEY,
        authenticationToken: API_TOKEN,
        includeData: 1
    };

    try {
        // Make the API call using apiModule
        const responseJSON: FieldroutesResponse = await apiModule.call('/appointment/search', 'post', params);

        return responseJSON

    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }
}