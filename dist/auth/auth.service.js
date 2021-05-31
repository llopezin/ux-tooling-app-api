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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const invited_users_service_1 = require("../invited-users/invited-users.service");
const invited_user_interface_1 = require("../invited-users/interfaces/invited-user.interface");
const work_spaces_service_1 = require("../workspaces/work-spaces.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, invitedUsersService, workspaceService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.invitedUsersService = invitedUsersService;
        this.workspaceService = workspaceService;
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.invitedUsersService = invitedUsersService;
        this.workspaceService;
    }
    async validateUser(email, pass) {
        const user = await this.usersService.findOne(email);
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = { email: user.email, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async validateNewUser(user) {
        if (await this.usersService.findOne(user.email)) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'User Already Registered',
            }, common_1.HttpStatus.FORBIDDEN);
        }
        const workspace_id = await this.getWorkspace(user);
        const completeUser = Object.assign({ workspace_id: workspace_id }, user);
        return this.usersService.create(completeUser);
    }
    async getWorkspace({ email }) {
        const foundInvitedUser = await this.invitedUsersService.findOne(email);
        return ((foundInvitedUser === null || foundInvitedUser === void 0 ? void 0 : foundInvitedUser.workspace_id) ||
            (await this.workspaceService.create({ admin_email: email })).id);
    }
};
AuthService = __decorate([
    common_1.Dependencies(users_service_1.UsersService, jwt_1.JwtService, invited_users_service_1.InvitedUsersService, work_spaces_service_1.WorkSpacesService),
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        invited_users_service_1.InvitedUsersService,
        work_spaces_service_1.WorkSpacesService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map