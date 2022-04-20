const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "jorgevargas", "Jorge")

        expect(user.username).toBe("jorgevargas")
        expect(user.name).toBe("Jorge")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
})