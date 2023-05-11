import { DataSource } from "typeorm";
import { User } from "../database/entities/user.entity";
import { ProviderTokens } from "../tokens";

export const userProviders = [
    {
        provide: ProviderTokens.UserPostgres,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: [ProviderTokens.PostgresDataSource]
    }
];
