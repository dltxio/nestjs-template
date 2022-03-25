import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IEvent, IEventStoreService } from "../interfaces";

@Injectable()
export class EventStoreService implements IEventStoreService {
    constructor(private config: ConfigService) {
        const var1 = config.get("EVENTSTORE_URI");
        console.log(var1);
    }

    public async append(name: string, event: IEvent) {
        // TODO
        console.log(name + event);
    }
}
