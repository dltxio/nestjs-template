import { Module } from "@nestjs/common";
import { EventStoreService } from "src/services/EventStore.service";
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
            provide: "EventStoreService",
            useClass: EventStoreService
        }
    ]
})
export class AccountsModule {}
