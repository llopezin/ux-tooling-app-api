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
exports.InvitedUsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const invited_user_dto_1 = require("./dto/invited-user.dto");
const invited_users_service_1 = require("./invited-users.service");
let InvitedUsersController = class InvitedUsersController {
    constructor(invitedUserSevice) {
        this.invitedUserSevice = invitedUserSevice;
    }
    create(InvitedUserDto) {
        return this.invitedUserSevice.create(InvitedUserDto);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ description: 'Create a new invited user' }),
    swagger_1.ApiBody({ type: invited_user_dto_1.InvitedUserDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [invited_user_dto_1.InvitedUserDto]),
    __metadata("design:returntype", Promise)
], InvitedUsersController.prototype, "create", null);
InvitedUsersController = __decorate([
    common_1.Controller('invited-users'),
    __metadata("design:paramtypes", [invited_users_service_1.InvitedUsersService])
], InvitedUsersController);
exports.InvitedUsersController = InvitedUsersController;
//# sourceMappingURL=invited-users.controller.js.map