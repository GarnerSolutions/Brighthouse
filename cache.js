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
exports.Customers_cache = exports.Employees_cache = void 0;
const apiModule_js_1 = __importDefault(require("./apiModule.js"));
const config_js_1 = require("./config.js");
exports.Employees_cache = new Map();
function fetchEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        const paramsSearch = {
            authenticationKey: config_js_1.API_KEY,
            authenticationToken: config_js_1.API_TOKEN,
            includeData: 1
        };
        const responseJSON = yield apiModule_js_1.default.call('/employee/search', 'post', paramsSearch);
        const paramsGet = {
            authenticationKey: config_js_1.API_KEY,
            authenticationToken: config_js_1.API_TOKEN,
            includeData: 1,
            employeeIDs: responseJSON.employeeIDs
        };
        const employeeData = yield apiModule_js_1.default.call('/employee/get', 'post', paramsGet);
        employeeData.forEach(element => {
            exports.Employees_cache.set(element.employeeID, `${element.fname} ${element.lname}`);
        });
    });
}
fetchEmployees();
exports.Customers_cache = new Map();
function fetchCustomers() {
    return __awaiter(this, void 0, void 0, function* () {
        const paramsSearch = {
            authenticationKey: config_js_1.API_KEY,
            authenticationToken: config_js_1.API_TOKEN,
            includeData: 1
        };
        const responseJSON = yield apiModule_js_1.default.call('/customer/search', 'post', paramsSearch);
        const paramsGet = {
            authenticationKey: config_js_1.API_KEY,
            authenticationToken: config_js_1.API_TOKEN,
            includeData: 1,
            customerIDs: responseJSON.customerIDs
        };
        const customerData = yield apiModule_js_1.default.call('/customer/get', 'post', paramsGet);
        customerData.forEach(element => {
            exports.Customers_cache.set(element.employeeID, `${element.fname} ${element.lname}`);
        });
    });
}
fetchCustomers();
