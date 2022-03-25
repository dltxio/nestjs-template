import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventStoreService } from "./services/EventStore.service";
import { AccountsModule } from "./accounts/accounts.module";

@Module({
    imports: [
        AccountsModule,
        ConfigModule.forRoot({
            isGlobal: true
        })
    ],
    providers: [EventStoreService]
})
export class AppModule {}
