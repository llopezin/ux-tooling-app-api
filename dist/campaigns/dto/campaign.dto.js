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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CampaignDto {
    constructor() {
        this.active = false;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String, description: 'name' }),
    __metadata("design:type", String)
], CampaignDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Boolean, description: 'active' }),
    __metadata("design:type", Boolean)
], CampaignDto.prototype, "active", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array, description: 'user_task_ids' }),
    __metadata("design:type", Array)
], CampaignDto.prototype, "user_task_ids", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, description: 'report_id' }),
    __metadata("design:type", Number)
], CampaignDto.prototype, "report_id", void 0);
exports.CampaignDto = CampaignDto;
//# sourceMappingURL=campaign.dto.js.map