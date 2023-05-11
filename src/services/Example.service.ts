import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IExampleService } from "./example.types";

/* 
    This is a service that is not associated with a controller or module.
*/

const ExampleSettingKeys = {
    EXAMPLESERVICE_SETTING: "EXAMPLESERVICE_SETTING"
};

@Injectable()
export class ExampleService implements IExampleService {
    private mySetting: string;
    constructor(private config: ConfigService) {
        this.mySetting = this.config.get(ExampleSettingKeys.EXAMPLESERVICE_SETTING);
    }   

    public getAll() {
        return ["1", "2", "3"];
    }

    public getById(id: string) {
        // dummy impl
        return id;
    }

    public getMySetting() {
        return this.mySetting;
    }
}
