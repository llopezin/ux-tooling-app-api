"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workSpaceSchema = void 0;
const mongoose = require("mongoose");
exports.workSpaceSchema = new mongoose.Schema({
    admin_email: String,
    name: String,
    campaign_ids: [String],
});
//# sourceMappingURL=workspace.schema.js.map