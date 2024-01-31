import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("City - create", () => {

    it(`Given a request
    When I create a city
    Then should be success`, async () => {
        const cityRequest = { name: "Test" };
        const result = await testServer.post("/cities").send(cityRequest);

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof result.body).toEqual("number");
    });

    it(`Given a request
    And name has less then 3 letters
    When I create a city
    Then should be failed`, async () => {
        const expectedErr = { errors: [{ name: "Deve ter pelo menos 3 caracteres" }] };

        const cityRequest = { name: "Te" };
        const result = await testServer.post("/cities").send(cityRequest);

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toEqual(expectedErr);
    });

    it(`Given a request
    And name is empty
    When I create a city
    Then should be failed`, async () => {
        const expectedErr = { errors: [{ name: "Este campo é obrigatório" }] };

        const cityRequest = {};
        const result = await testServer.post("/cities").send(cityRequest);

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toEqual(expectedErr);
    });

});