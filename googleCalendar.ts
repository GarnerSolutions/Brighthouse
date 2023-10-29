
import axios from 'axios';
import google from "googleapis"


// Set your Google Calendar API key.
const apiKey = 'AIzaSyCW7vyJMLd7f_wIxBAH6MqQ8JCqTiybc7Y';

//@ts-ignore
const calendar = google.calendar_v3({
    version: 'v3',
    auth: apiKey,
});


async function fetchGoogleCalendarEvents() {
    try {
        // Set the calendar ID (usually 'primary' for the authenticated user's primary calendar).
        const calendarId = 'primary';

        // Define the time range for events retrieval (optional).
        const timeMin = new Date().toISOString();
        const timeMax = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(); // Fetch events for the next 7 days.



        // Build the URL for the Google Calendar API.
        const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}`;


        // Make a GET request to the Google Calendar API.
        const response = await axios.get(apiUrl);

        const events = response.data.items;

        if (events.length) {
            console.log('Upcoming events:');
            events.forEach((event: any, i: number) => {
                const start = event.start.dateTime || event.start.date;
                console.log(`${i + 1}. ${start} - ${event.summary}`);
            });
        } else {
            console.log('No upcoming events found.');
        }
    } catch (error) {
        console.error('Error fetching events:', JSON.stringify(error));

    }
}

fetchGoogleCalendarEvents();



