import { Inject, Injectable, Logger } from "@nestjs/common";
import { IEventStoreService } from "../interfaces";

@Injectable()
export class AccountsService {
    private readonly logger = new Logger("AccountService");
    constructor(
        @Inject("IEventStoreService") public eventStore: IEventStoreService
    ) {}

    // Get a list of accounts
    public async getAll(): Promise<any> {
        return await this.eventStore.getAll();
    }

    // Get an account
    public async getById(id: string): Promise<any> {
        return await this.eventStore.getById(id);
    }
}
