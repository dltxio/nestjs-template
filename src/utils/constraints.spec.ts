import { validate, Validate, ValidationError } from "class-validator";
import { IsUnsignedBigNumberString } from "./constraints";

class TestCustomConstraints {
    @Validate(IsUnsignedBigNumberString)
    unsignedBigNumberString: string;
}

async function validateValue(value: string): Promise<ValidationError[]> {
    const test = new TestCustomConstraints();
    test.unsignedBigNumberString = value;
    return validate(test);
}

describe("Custom constraints", () => {
    it.each(["cheese", "12.6", "-12", "", null, undefined])(
        "should fail invalid value %s",
        async value => {
            const result = await validateValue(value);
            expect(result.length).toBe(1);
            expect(result[0].constraints !== undefined);
            expect(
                result[0].constraints?.isUnsignedBigNumberString
            ).toBeDefined();
        }
    );

    it.each(["0", "123", "1000000000000000000000000000000000000000000000"])(
        "should pass valid value %s",
        async value => {
            const result = await validateValue(value);
            expect(result.length).toBe(0);
        }
    );
});
