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
exports.InvitedUsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
let InvitedUsersService = class InvitedUsersService {
    constructor(invitedUserModel, usersService) {
        this.invitedUserModel = invitedUserModel;
        this.usersService = usersService;
    }
    async findOne(email) {
        return this.invitedUserModel.findOne({ email: email });
    }
    async create(InvitedUserDto) {
        if (await this.usersService.findOne(InvitedUserDto.email)) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'User Already Registered',
            }, common_1.HttpStatus.FORBIDDEN);
        }
        const createdInviteduser = new this.invitedUserModel(InvitedUserDto);
        return createdInviteduser.save();
    }
};
InvitedUsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('InvitedUser')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], InvitedUsersService);
exports.InvitedUsersService = InvitedUsersService;
//# sourceMappingURL=invited-users.service.js.map