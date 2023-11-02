
import axios from 'axios';
import { google } from "googleapis"
import key from "./lucid-destiny-336014-d1f39c212058"

// Set your Google Calendar API key.


const calendarId = "rksvis@gmail.com"

async function fetchGoogleCalendarEvents() {
    try {

        // Define the time range for events retrieval (optional).
        const timeMin = new Date().toISOString();
        const timeMax = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(); // Fetch events for the next 7 days.
        // Create a JWT client using the service account key
        const jwtClient = new google.auth.JWT({
            email: key.client_email,
            key: key.private_key,
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });

        // Authenticate the client
        jwtClient.authorize(async (err) => {
            if (err) {
                console.error('Error authenticating service account:', err);
                return;
            }
            // Create an instance of the Google Calendar API
            const calendar = google.calendar({ version: 'v3', auth: jwtClient });


            const e = await calendar.events.list({
                calendarId: calendarId,
                timeMin: timeMin,
                timeMax: timeMax
            })

            console.log(JSON.stringify(e.data))

            calendar.acl.insert({
                requestBody: {
                    role: ""
                }
            })

            const event = {
                summary: 'Event Title',
                location: 'Event Location',
                description: 'Event Description',
                start: {
                    dateTime: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000).toISOString(),
                    timeZone: 'CET',
                },
                end: {
                    dateTime: new Date(new Date().getTime() + 1 * 25 * 60 * 60 * 1000).toISOString(),
                    timeZone: 'CET',
                },
            };
            // const k = await calendar.events.insert({
            //     calendarId: calendarId,
            //     requestBody: event
            // })

            // console.log(k)


        });





    } catch (error) {
        console.error('Error fetching events:', JSON.stringify(error));

    }
}

fetchGoogleCalendarEvents();



