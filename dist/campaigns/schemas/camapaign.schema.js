"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.campaignSchema = void 0;
const mongoose = require("mongoose");
exports.campaignSchema = new mongoose.Schema({
    name: String,
    active: Boolean,
    user_task_ids: Array,
    report_id: Number,
});
//# sourceMappingURL=camapaign.schema.js.map