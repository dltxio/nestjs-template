import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IEvent, IEventStoreService } from "../interfaces";

@Injectable()
export class EventStoreService implements IEventStoreService {
    constructor(private config: ConfigService) {
        const var1 = config.get("EVENTSTORE_URI");
        console.log(var1);
    }

    public getAll() {
        return ["1", "2", "3"];
    }
    
    public getById(id: string) {
        // dummy impl
        console.log(id);
        return id;
    }
}
