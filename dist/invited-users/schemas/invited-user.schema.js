"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitedUserSchema = void 0;
const mongoose = require("mongoose");
exports.invitedUserSchema = new mongoose.Schema({
    email: String,
    workspace_id: String,
});
//# sourceMappingURL=invited-user.schema.js.map