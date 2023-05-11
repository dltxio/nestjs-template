import { User } from "../database/entities/user.entity";

export interface IUserService {
    findAll(): Promise<User[]>;
}
