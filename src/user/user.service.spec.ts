import { UserModule } from "./user.module";
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { DatabaseModule } from "../database/database.module";
import { userProviders } from "./user.providers";
import { ConfigModule } from "@nestjs/config";
import { IUserService } from "./user.types";

describe("UserService", () => {
    let service: IUserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                DatabaseModule,
                UserModule,
                ConfigModule.forRoot({
                    isGlobal: true
                })
            ],
            providers: [...userProviders, UserService]
        }).compile();

        service = module.get<IUserService>(UserService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined()
    });

    it("should return an array of users", async () => {
        const users = await service.findAll();
        expect(users).toBeInstanceOf(Array);
    });
});
