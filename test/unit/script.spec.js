import { add } from '/src/script';

describe("A test suite", () => {
    it("contains spec with an expectation", () => {
        expect(add(1,1)).toEqual(2);
    });
});
