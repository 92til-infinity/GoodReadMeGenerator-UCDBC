const TEST = require("../index.js");

describe("TEST", () => {
    describe("Initialization", () => {
        // Positive test
        it("should create an README.MD with a input from user", () => {
            // Arrange
            const text = "GITHUB";
            // Act
            const obj = new TEST(text);
            // Assert
            expect(obj.text).toEqual(text);
        });
    });
});