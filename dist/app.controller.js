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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const local_auth_guard_1 = require("./auth/local-auth.guard");
const auth_service_1 = require("./auth/auth.service");
const user_dto_1 = require("./users/dto/user.dto");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users/users.service");
let AppController = class AppController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async login(req) {
        return this.authService.login(req.user._doc);
    }
    getProfile(req) {
        return this.usersService.findProfile(req.user.email);
    }
    create(createUserDto) {
        return this.authService.validateNewUser(createUserDto);
    }
};
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOkResponse({ description: 'Returns auth token' }),
    swagger_1.ApiUnauthorizedResponse(),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('auth/login'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOkResponse({ description: 'Returns user profile' }),
    swagger_1.ApiUnauthorizedResponse(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('profile'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
__decorate([
    common_1.Post('register'),
    swagger_1.ApiCreatedResponse({ description: 'Create a new user' }),
    swagger_1.ApiBody({ type: user_dto_1.CreateUserDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map