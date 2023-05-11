
import { Test, TestingModule } from "@nestjs/testing";
import { ConfigModule } from "@nestjs/config";
import { IUserService } from "./user.types";
import { ProviderTokens } from "../tokens";
import { Repository } from "typeorm";
import { User } from "../database/entities/user.entity";
import { UserService } from "./user.service";

const userRepositoryMock = {
    findOne: (): Promise<User> => {
        return new Promise((resolve, reject) => {
            const result: User = {
                id: "1",
                email: "test@test.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
            resolve(result);   
        }); 
    },
    find: (): Promise<User[]> => {
        return new Promise((resolve, reject) => {
            const result: User[] =[
                {
                    id: "1",
                    email: "test@test.com",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: "2",
                    email: "test2@test.com",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ]
            resolve(result);
        });
    }
};

describe("UserService", () => {
    let service: IUserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true
                }),
            ],          
            providers: [
                {
                    provide: ProviderTokens.UserService,
                    useFactory: () => {
                        return new UserService(userRepositoryMock as unknown as Repository<User>);
                    }
                }
            ]
        }).compile();

        service = module.get<IUserService>(ProviderTokens.UserService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined()
    });

    it("should return an array of users", async () => {
        const users = await service.findAll();
        expect(users).toBeInstanceOf(Array);
        expect(users[0]).toHaveProperty("id");
        expect(users[0]).toHaveProperty("email");
        expect(users[0]).toHaveProperty("createdAt");
        expect(users[0]).toHaveProperty("updatedAt");
    });
});
