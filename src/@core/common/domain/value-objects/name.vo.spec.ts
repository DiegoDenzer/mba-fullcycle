import { Name } from "./name.vo";


test("Deve criar um nome Valido", () => {
    const name = new Name("John Doe");
    expect(name.value).toBe("John Doe");
});


test("Deve LANÇAR ERRO ", () => {
    expect(() => new Name("Jo")).toThrowError("Name must be at least 3 characters long");

});