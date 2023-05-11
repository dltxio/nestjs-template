import { Test } from "@nestjs/testing";
import { UserModule } from "../src/user/user.module";
import { INestApplication } from "@nestjs/common";
import supertest from "supertest";
import { ConfigModule } from "@nestjs/config";
const request = supertest;

describe("User", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true
                }),
                UserModule
            ]
        }).compile();
        app = module.createNestApplication();
        await app.init();
    });

    describe("GET /user", () => {
        it(`should be running and returning a status of 200`, async () => {
            await request(app.getHttpServer()).get("/user").expect(200);
        });
    });
});
