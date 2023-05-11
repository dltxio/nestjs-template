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
    ["cheese", "12.6", "-12", "", null, undefined].forEach(value => {
        it(`should fail invalid value ${value}`, async () => {
            const result = await validateValue(value);
            expect(result.length).toEqual(1);
            expect(result[0].constraints !== undefined);
            expect(result[0].constraints?.isUnsignedBigNumberString).toBeDefined()
        });
    });

    ["0", "123", "1000000000000000000000000000000000000000000000"].forEach(
        value => {
            it(`should pass valid value ${value}`, async () => {
                const result = await validateValue(value);
                expect(result.length).toEqual(0);
            });
        }
    );
});
