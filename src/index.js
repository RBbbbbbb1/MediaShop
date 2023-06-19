"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Required External Modules
 */
var dotenv = require("dotenv");
require("reflect-metadata");
var express_1 = require("express");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var data_source_1 = require("./instances/data-source");
var Router = require("./routers/app-router");
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = (0, express_1.default)();
/**
 *  App Configuration
 */
(0, data_source_1.initialDatabase)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(Router.PATH, Router.router);
/**
 * Server Activation
 */
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
