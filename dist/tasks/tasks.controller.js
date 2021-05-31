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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const task_dto_1 = require("./dto/task.dto");
const tasks_service_1 = require("./tasks.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const campaign_interface_1 = require("../campaigns/interfaces/campaign.interface");
let TasksController = class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    findManyById(task_ids) {
        return this.taskService.findMany(task_ids);
    }
    findOne(id) {
        return this.taskService.findOne(id);
    }
    addResponse(response, task_id) {
        return this.taskService.addResponse(task_id, response);
    }
    update(updateTaskDto, id) {
        return this.taskService.update(id, updateTaskDto);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('find'),
    swagger_1.ApiCreatedResponse({ description: 'Get many tasks by id' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findManyById", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiCreatedResponse({ description: 'Get tasks by id' }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findOne", null);
__decorate([
    common_1.Post(':id/response'),
    swagger_1.ApiCreatedResponse({ description: 'Post a response' }),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "addResponse", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Put('/update/:id'),
    swagger_1.ApiCreatedResponse({ description: 'Modify task' }),
    swagger_1.ApiBody({ type: task_dto_1.TaskDto }),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.TaskDto, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "update", null);
TasksController = __decorate([
    common_1.Controller('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TaskService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map