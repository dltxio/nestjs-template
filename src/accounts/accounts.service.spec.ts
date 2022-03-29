import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { EventStoreService } from "../services/EventStore.service";
import { IEventStoreService } from "../interfaces";
import { AccountsService } from "./accounts.service";

describe("AccountService", () => {
    let service: AccountsService;
    let eventStore: IEventStoreService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true
                })
            ],
            providers: [
                AccountsService,
                EventStoreService,
                {
                    provide: "IEventStoreService",
                    useClass: EventStoreService
                }
            ]
        }).compile();

        service = module.get<AccountsService>(AccountsService);
        service.eventStore = module.get<IEventStoreService>(EventStoreService);;
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("Creating a vault account", () => {
        it("should call the createVaultAccount method", async () => {
            const accountName = "myAccount";
            jest.spyOn(eventStore, "append").mockResolvedValue();
            await service.getById(accountName);
            expect(eventStore.append).toBeCalledWith(accountName);
        });
    });
});
