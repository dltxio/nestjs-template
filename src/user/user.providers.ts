import { DataSource } from "typeorm";
import { User } from "../database/entities/user.entity";
import { ProviderTokens } from "../tokens";

export const userProviders = [
    {
        provide: ProviderTokens.UserServicePostgres,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: [ProviderTokens.PostgresDataSource]
    }
];
