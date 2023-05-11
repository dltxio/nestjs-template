import { Inject, Injectable, Logger } from "@nestjs/common";
import { User } from "../database/entities/user.entity";
import { Repository } from "typeorm";
import { IUserService } from "./user.types";
import { ProviderTokens } from "../tokens";

@Injectable()
export class UserService implements IUserService {
    private readonly logger = new Logger("UserService");
    constructor(
        @Inject(ProviderTokens.UserPostgres)
        private userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        this.logger.verbose("Retrieving all users");
        return this.userRepository.find();
    }
}
