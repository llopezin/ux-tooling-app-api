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
exports.WorkSpacesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const campaigns_service_1 = require("../campaigns/campaigns.service");
const campaign_interface_1 = require("../campaigns/interfaces/campaign.interface");
let WorkSpacesService = class WorkSpacesService {
    constructor(campaingsService, workSpaceModel) {
        this.campaingsService = campaingsService;
        this.workSpaceModel = workSpaceModel;
    }
    async findOne(id) {
        return this.workSpaceModel.findOne({ _id: id });
    }
    async create(workspaceDto) {
        const createdWorkSpace = new this.workSpaceModel(workspaceDto);
        return createdWorkSpace.save();
    }
    async update(id, updates) {
        return this.workSpaceModel.findByIdAndUpdate(id, updates, { new: true });
    }
    async addCampaign(campaign, workspace_id) {
        const newCampaign = await this.campaingsService.create(campaign);
        const updates = {
            $push: { campaign_ids: newCampaign.id }
        };
        return this.update(workspace_id, updates);
    }
};
WorkSpacesService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('WorkSpace')),
    __metadata("design:paramtypes", [campaigns_service_1.CampaignsService,
        mongoose_2.Model])
], WorkSpacesService);
exports.WorkSpacesService = WorkSpacesService;
//# sourceMappingURL=work-spaces.service.js.map