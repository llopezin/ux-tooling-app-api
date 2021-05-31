"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const task_interface_1 = require("../tasks/interfaces/task.interface");
const tasks_service_1 = require("../tasks/tasks.service");
let CampaignsService = class CampaignsService {
    constructor(taskService, campaignModel) {
        this.taskService = taskService;
        this.campaignModel = campaignModel;
    }
    async findAll() {
        return this.campaignModel.find().exec();
    }
    async findOne(id) {
        return this.campaignModel.findOne({ _id: id });
    }
    async findMany(idsArray) {
        return this.campaignModel.find({
            _id: idsArray,
        });
    }
    async create(CampaignDto) {
        const createdCampaign = new this.campaignModel(CampaignDto);
        return createdCampaign.save();
    }
    async delete(id) {
        return this.campaignModel.findOneAndDelete({ _id: id });
    }
    async update(id, updates) {
        const res = await this.campaignModel.findByIdAndUpdate(id, updates, { new: true });
        return res;
    }
    async addTask(task, campaign_id) {
        const newTask = await this.taskService.create(task);
        const updates = {
            $push: { user_task_ids: newTask.id }
        };
        return this.update(campaign_id, updates);
    }
};
CampaignsService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('Campaign')),
    __metadata("design:paramtypes", [tasks_service_1.TaskService,
        mongoose_1.Model])
], CampaignsService);
exports.CampaignsService = CampaignsService;
//# sourceMappingURL=campaigns.service.js.map