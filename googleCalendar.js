"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Set your Google Calendar API key.
const apiKey = 'AIzaSyCW7vyJMLd7f_wIxBAH6MqQ8JCqTiybc7Y';
function fetchGoogleCalendarEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Set the calendar ID (usually 'primary' for the authenticated user's primary calendar).
            const calendarId = 'primary';
            // Define the time range for events retrieval (optional).
            const timeMin = new Date().toISOString();
            const timeMax = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(); // Fetch events for the next 7 days.
            // Build the URL for the Google Calendar API.
            const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}`;
            // Make a GET request to the Google Calendar API.
            const response = yield axios_1.default.get(apiUrl);
            const events = response.data.items;
            if (events.length) {
                console.log('Upcoming events:');
                events.forEach((event, i) => {
                    const start = event.start.dateTime || event.start.date;
                    console.log(`${i + 1}. ${start} - ${event.summary}`);
                });
            }
            else {
                console.log('No upcoming events found.');
            }
        }
        catch (error) {
            console.error('Error fetching events:', error);
        }
    });
}
fetchGoogleCalendarEvents();
