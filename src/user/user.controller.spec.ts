import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserModule } from "./user.module";
import { DatabaseModule } from "../database/database.module";
import { userProviders } from "./user.providers";

describe("UserController", () => {
    let controller: UserController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true
                }),
                DatabaseModule,
                UserModule
            ],
            providers: [...userProviders]
        }).compile();

        controller = module.get<UserController>(UserController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    it("should return an array of users", async () => {
        const users = await controller.getAll();
        expect(users).toBeInstanceOf(Array);//to.be.an("array");
    });
});
