"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const campaigns_modules_1 = require("./campaigns/campaigns.modules");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const app_controller_1 = require("./app.controller");
const keys_1 = require("./config/keys");
const passport_1 = require("@nestjs/passport");
const works_paces_module_1 = require("./workspaces/works-paces.module");
const invited_users_module_1 = require("./invited-users/invited-users.module");
const tasks_module_1 = require("./tasks/tasks.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            campaigns_modules_1.CampaignsModule,
            mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI, { useFindAndModify: false }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            passport_1.PassportModule,
            works_paces_module_1.WorkSpacesModule,
            invited_users_module_1.InvitedUsersModule,
            tasks_module_1.TasksModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, './', 'front'),
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map