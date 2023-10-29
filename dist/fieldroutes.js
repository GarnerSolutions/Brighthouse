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
exports.getFieldroutes = void 0;
const apiModule_js_1 = __importDefault(require("./apiModule.js"));
const cache_js_1 = require("./cache.js");
const config_js_1 = require("./config.js");
function getFieldroutes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const apointsments = yield fetchAppointments();
            if (!apointsments) {
                throw "No apointments got";
            }
            return apointsments.appointments.map(appointment => {
                const cn = cache_js_1.Employees_cache.get(appointment.assignedTech);
                const sn = cache_js_1.Employees_cache.get(appointment.employeeID);
                const name = cache_js_1.Customers_cache.get(appointment.customerID);
                if (!cn || !sn || !name) {
                    console.error("No employee ID for ", cn, sn, name);
                    throw new Error("No employee ID");
                }
                return {
                    appointmentStart: new Date(appointment.date + " " + appointment.start),
                    appointmentEnd: new Date(appointment.date + " " + appointment.end),
                    closerName: cn,
                    setterName: sn,
                    name: name,
                    notes: appointment.appointmentNotes
                };
            });
        }
        catch (error) {
            console.log(error);
            return [];
        }
    });
}
exports.getFieldroutes = getFieldroutes;
function fetchAppointments() {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            dateUpdated: new Date(),
            authenticationKey: config_js_1.API_KEY,
            authenticationToken: config_js_1.API_TOKEN,
            includeData: 1
        };
        try {
            // Make the API call using apiModule
            const responseJSON = yield apiModule_js_1.default.call('/appointment/search', 'post', params);
            return responseJSON;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    });
}
