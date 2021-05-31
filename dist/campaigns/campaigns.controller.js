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
exports.CampaignsController = void 0;
const common_1 = require("@nestjs/common");
const campaign_dto_1 = require("./dto/campaign.dto");
const campaigns_service_1 = require("./campaigns.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const task_interface_1 = require("../tasks/interfaces/task.interface");
let CampaignsController = class CampaignsController {
    constructor(camapaignsService) {
        this.camapaignsService = camapaignsService;
    }
    findOne(id) {
        return this.camapaignsService.findOne(id);
    }
    findManyById(campaign_ids) {
        return this.camapaignsService.findMany(campaign_ids);
    }
    create(CampaignDto) {
        return this.camapaignsService.create(CampaignDto);
    }
    delete(id) {
        return this.camapaignsService.delete(id);
    }
    update(updateCampaigDto, id) {
        return this.camapaignsService.update(id, updateCampaigDto);
    }
    addCampaign(campaign_id, task) {
        return this.camapaignsService.addTask(task, campaign_id);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(':id'),
    swagger_1.ApiCreatedResponse({ description: 'Get campaign by id' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "findOne", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('find'),
    swagger_1.ApiCreatedResponse({ description: 'Get many campaigns by id' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "findManyById", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ description: 'Create a new campaign' }),
    swagger_1.ApiBody({ type: campaign_dto_1.CampaignDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [campaign_dto_1.CampaignDto]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Delete(':id'),
    swagger_1.ApiCreatedResponse({ description: 'Remove campaing by id' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "delete", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Put(':id'),
    swagger_1.ApiCreatedResponse({ description: 'Modify campaign' }),
    swagger_1.ApiBody({ type: campaign_dto_1.CampaignDto }),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [campaign_dto_1.CampaignDto, Object]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "update", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(':id/new-task'),
    swagger_1.ApiCreatedResponse({ description: 'Create a new task' }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "addCampaign", null);
CampaignsController = __decorate([
    common_1.Controller('campaigns'),
    __metadata("design:paramtypes", [campaigns_service_1.CampaignsService])
], CampaignsController);
exports.CampaignsController = CampaignsController;
//# sourceMappingURL=campaigns.controller.js.map