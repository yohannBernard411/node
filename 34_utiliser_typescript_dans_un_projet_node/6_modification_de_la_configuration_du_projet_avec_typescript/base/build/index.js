"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const app = express_1.default();
app.use((req, _, next) => {
    console.log(req.url);
    next();
});
app.get('*', (_, res) => {
    res.sendFile(path_1.join(__dirname, '../index.html'));
});
app.listen(5000);
//# sourceMappingURL=index.js.map