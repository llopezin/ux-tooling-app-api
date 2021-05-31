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
exports.TaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TaskDto {
}
__decorate([
    swagger_1.ApiProperty({ type: String, description: 'name' }),
    __metadata("design:type", String)
], TaskDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: 'type' }),
    __metadata("design:type", String)
], TaskDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array, description: 'questions' }),
    __metadata("design:type", Array)
], TaskDto.prototype, "questions", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array, description: 'cards' }),
    __metadata("design:type", Array)
], TaskDto.prototype, "cards", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array, description: 'instructions' }),
    __metadata("design:type", String)
], TaskDto.prototype, "instructions", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array, description: 'categories' }),
    __metadata("design:type", Array)
], TaskDto.prototype, "categories", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array, description: 'responses' }),
    __metadata("design:type", Array)
], TaskDto.prototype, "responses", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array, description: 'categories' }),
    __metadata("design:type", Array)
], TaskDto.prototype, "tasks", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Array, description: 'responses' }),
    __metadata("design:type", Object)
], TaskDto.prototype, "headings", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, description: 'users required' }),
    __metadata("design:type", Number)
], TaskDto.prototype, "usersRequired", void 0);
exports.TaskDto = TaskDto;
//# sourceMappingURL=task.dto.js.map