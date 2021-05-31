/// <reference types="mongoose" />
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InvitedUsersService } from '../invited-users/invited-users.service';
import { WorkSpacesService } from 'src/workspaces/work-spaces.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private invitedUsersService;
    private workspaceService;
    constructor(usersService: UsersService, jwtService: JwtService, invitedUsersService: InvitedUsersService, workspaceService: WorkSpacesService);
    validateUser(email: any, pass: any): Promise<{
        email: string;
        workspace_id?: string;
        _id?: any;
        __v?: number;
        $locals: Record<string, unknown>;
        $op: string;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        modelName: string;
        schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined>;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    validateNewUser(user: any): Promise<import("../users/interfaces/hashedUser.interface").HashedUser>;
    getWorkspace({ email }: {
        email: any;
    }): Promise<string>;
}
