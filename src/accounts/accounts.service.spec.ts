import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { IEventStoreService } from "../interfaces";
import { AccountsService } from "./accounts.service";

describe("AccountService", () => {
    let service: AccountsService;
    let fbSvc: IEventStoreService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true
                })
            ],
            providers: [AccountsService]
        }).compile();

        service = module.get<AccountsService>(AccountsService);

        service.fbSvc = fbSvc;
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("Creating a vault account", () => {
        it("should call the createVaultAccount method", async () => {
            const accountName = "myAccount";
            jest.spyOn(fbSvc, "append").mockResolvedValue();
            await service.getById(accountName);
            expect(fbSvc.append).toBeCalledWith(accountName);
        });
    });
});
