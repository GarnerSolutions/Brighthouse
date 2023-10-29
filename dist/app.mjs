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
const jsdom_1 = require("jsdom");
const node_fetch_1 = __importDefault(require("node-fetch"));
// Create a DOM environment using jsdom
const { window } = new jsdom_1.JSDOM();
const $ = require('jquery')(window);
const API_URL = 'https://brighthousesolar.fieldroutes.com/api';
const API_KEY = '2l6dhlhl6tltpfu98dpvb6770a0mrro8i1tcctk66ksurks44ceohif28o30um17';
const API_TOKEN = '8ebgdsgiihnutdglcponabcvadj5166nmob6m8g2gnene3v0eqvb8q2385ouedcu';
let salesRepNames = {};
function fetchsetterName(employeeID) {
    return __awaiter(this, void 0, void 0, function* () {
        const headers = {
            'Authorization': `Bearer ${API_KEY}:${API_TOKEN}`
        };
        try {
            const response = yield (0, node_fetch_1.default)(`${API_URL}/employee/${employeeID}`, { headers });
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = yield response.json();
            console.log("Employee data for ID " + employeeID, data); // Logging the response
            return `${data.fname} ${data.lname}`;
        }
        catch (error) {
            console.error("Error fetching employee data:", error);
            throw error;
        }
    });
}
fetchsetterName('10004')
    .then(setterName => {
    console.log("Employee name:", setterName);
})
    .catch(err => {
    console.error("Error:", err);
});
