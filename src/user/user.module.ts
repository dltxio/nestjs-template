import { userProviders } from "./user.providers";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { ProviderTokens } from "../tokens";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        ...userProviders,
        {
            provide: ProviderTokens.UserService,
            useClass: UserService
        }
    ]
})
export class UserModule {}
