"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitedUsersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const invited_users_controller_1 = require("./invited-users.controller");
const invited_users_service_1 = require("./invited-users.service");
const invited_user_schema_1 = require("./schemas/invited-user.schema");
const users_module_1 = require("../users/users.module");
let InvitedUsersModule = class InvitedUsersModule {
};
InvitedUsersModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'InvitedUser', schema: invited_user_schema_1.invitedUserSchema },
            ]),
        ],
        controllers: [invited_users_controller_1.InvitedUsersController],
        providers: [invited_users_service_1.InvitedUsersService],
        exports: [invited_users_service_1.InvitedUsersService],
    })
], InvitedUsersModule);
exports.InvitedUsersModule = InvitedUsersModule;
//# sourceMappingURL=invited-users.module.js.map