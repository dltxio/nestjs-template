import { Module } from "@nestjs/common";
import { EventStoreService } from "../services/EventStore.service";
import { AccountsController } from "./accounts.controller";
import { AccountsService } from "./accounts.service";

@Module({
    controllers: [AccountsController],
    providers: [
        {
            provide: "IAccountsService",
            useClass: AccountsService
        },
        {
            provide: "IEventStoreService",
            useClass: EventStoreService
        }
    ]
})
export class AccountsModule {}
