const name = "Susan";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
describe("Height", (39) => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeMoreThan(0)
      expect(height).toBeLessThan(40);
    });
  });