"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    email: String,
    password: String,
    workspace_id: String,
});
//# sourceMappingURL=user.schema.js.map