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
exports.WorkSpacesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const workspace_dto_1 = require("./dto/workspace.dto");
const work_spaces_service_1 = require("./work-spaces.service");
let WorkSpacesController = class WorkSpacesController {
    constructor(workSpacesService) {
        this.workSpacesService = workSpacesService;
    }
    findOne(id) {
        return this.workSpacesService.findOne(id);
    }
    create(WorkspaceDto) {
        return this.workSpacesService.create(WorkspaceDto);
    }
    addCampaign(workspace_id, campaign) {
        return this.workSpacesService.addCampaign(campaign, workspace_id);
    }
    update(WorkspaceDto, id) {
        return this.workSpacesService.update(id, WorkspaceDto);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(':id'),
    swagger_1.ApiCreatedResponse({ description: 'Get WorkSpace by id' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkSpacesController.prototype, "findOne", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ description: 'Create a new WorkSpace' }),
    swagger_1.ApiBody({ type: workspace_dto_1.WorkspaceDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_dto_1.WorkspaceDto]),
    __metadata("design:returntype", Promise)
], WorkSpacesController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('new-campaign/:workspace_id'),
    swagger_1.ApiCreatedResponse({ description: 'Create a new campaign' }),
    __param(0, common_1.Param('workspace_id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WorkSpacesController.prototype, "addCampaign", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Put(':id'),
    swagger_1.ApiCreatedResponse({ description: 'Modify WorkSpace' }),
    swagger_1.ApiBody({ type: workspace_dto_1.WorkspaceDto }),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_dto_1.WorkspaceDto, Object]),
    __metadata("design:returntype", Promise)
], WorkSpacesController.prototype, "update", null);
WorkSpacesController = __decorate([
    common_1.Controller('workSpace'),
    __metadata("design:paramtypes", [work_spaces_service_1.WorkSpacesService])
], WorkSpacesController);
exports.WorkSpacesController = WorkSpacesController;
//# sourceMappingURL=work-spaces.controller.js.map