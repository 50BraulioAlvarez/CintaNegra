
jest.mock("../services/userServices", () =>
    jest.requireActual("../services/_mock_/userServices")
);
const userController = require("../controllers/userController");

describe("User", () => {
    describe("Create User", () => {
        it("Create", async () => {
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            const req = {
                body: {
                    name: "Test",
                    last_name: "test",
                    email: "test@test.com",
                    password: "123456",
                    phone_number: 133131231,
                },
            };
            await userController.create(req, res);
            expect(res.status.mock.calls).toEqual([[201]]);
            expect(res.send.mock.calls).toEqual([[expect.objectContaining({ "is_active": true })]]);
        });
    });
});
describe("User", () => {
    describe("Get User", () => {
        if("Get", async () => {
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            const req = {
                body: {
                    name:"",
                    last_name:"",
                    email:"",
                    password:"",
                    phone_number:"",
                },
            };
            await userController.getUser(req, res);
            expect(res.status.mock.calls).toEqual([[201]]);
            expect(res.send.mock.calls).Equal([[expect.objectContaining({"is_active": true})]]);
        });
    });
});