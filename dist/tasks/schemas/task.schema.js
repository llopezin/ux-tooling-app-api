"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
const mongoose = require("mongoose");
exports.taskSchema = new mongoose.Schema({
    name: String,
    type: String,
    questions: Array,
    categories: Array,
    cards: Array,
    instructions: String,
    responses: Array,
    tasks: Array,
    headings: Map,
    usersRequired: Number
});
//# sourceMappingURL=task.schema.js.map