"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkSpacesModule = void 0;
const common_1 = require("@nestjs/common");
const work_spaces_service_1 = require("./work-spaces.service");
const work_spaces_controller_1 = require("./work-spaces.controller");
const workspace_schema_1 = require("./schemas/workspace.schema");
const mongoose_1 = require("@nestjs/mongoose");
const campaigns_modules_1 = require("../campaigns/campaigns.modules");
let WorkSpacesModule = class WorkSpacesModule {
};
WorkSpacesModule = __decorate([
    common_1.Module({
        imports: [
            campaigns_modules_1.CampaignsModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'WorkSpace', schema: workspace_schema_1.workSpaceSchema }]),
        ],
        providers: [work_spaces_service_1.WorkSpacesService],
        controllers: [work_spaces_controller_1.WorkSpacesController],
        exports: [work_spaces_service_1.WorkSpacesService],
    })
], WorkSpacesModule);
exports.WorkSpacesModule = WorkSpacesModule;
//# sourceMappingURL=works-paces.module.js.map