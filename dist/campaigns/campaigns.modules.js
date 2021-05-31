"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const campaigns_controller_1 = require("./campaigns.controller");
const camapaign_schema_1 = require("./schemas/camapaign.schema");
const campaigns_service_1 = require("./campaigns.service");
const tasks_module_1 = require("../tasks/tasks.module");
let CampaignsModule = class CampaignsModule {
};
CampaignsModule = __decorate([
    common_1.Module({
        imports: [
            tasks_module_1.TasksModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Campaign', schema: camapaign_schema_1.campaignSchema }]),
        ],
        controllers: [campaigns_controller_1.CampaignsController],
        providers: [campaigns_service_1.CampaignsService],
        exports: [campaigns_service_1.CampaignsService],
    })
], CampaignsModule);
exports.CampaignsModule = CampaignsModule;
//# sourceMappingURL=campaigns.modules.js.map