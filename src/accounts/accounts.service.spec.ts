import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { ExampleService } from "../services/Example.service";
import { IExampleService } from "../interfaces";
import { AccountsService } from "./accounts.service";

describe("AccountService", () => {
    let service: AccountsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true
                })
            ],
            providers: [
                AccountsService,
                ExampleService,
                {
                    provide: "IExampleService",
                    useClass: ExampleService
                }
            ]
        }).compile();

        service = module.get<AccountsService>(AccountsService);
        service.eventStore = module.get<IExampleService>(ExampleService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("Creating a vault account", () => {
        it("should call the createVaultAccount method", async () => {
            const myId = "1";
            //jest.spyOn(eventStore, "getById").mockResolvedValue(myId);
            await service.getById(myId);
            //expect(eventStore.getById).toBeCalledWith(myId);
        });
    });
});
