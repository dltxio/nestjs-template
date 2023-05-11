import { User } from "../database/entities/user.entity";
import { Controller, Get, HttpStatus, Inject } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { IUserService } from "./user.types";
import { ProviderTokens } from "../tokens";

@Controller("user")
export class UserController {
    constructor(@Inject(ProviderTokens.UserService) private userService: IUserService) {}

    @Get()
    @ApiOperation({ summary: "Get users" })
    @ApiResponse({
        status: HttpStatus.OK
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST
    })
    async getAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
