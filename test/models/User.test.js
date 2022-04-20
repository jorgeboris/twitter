const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    test('Create an User object', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "jorgevargas", "Jorge", "Bio")

        //Aqui validas los resultados de ese código
        //Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)

        expect(user.id).toBe(1)
        expect(user.username).toBe("jorgevargas")
        expect(user.name).toBe("Jorge")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const user = new User(1, "jorgevargas", "Jorge", "Bio")
        expect(user.getUsername).toBe("jorgevargas")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

    test('Add setters', () => {
        const user = new User(1, "jorgevargas", "Jorge", "Bio")
        user.setUsername = "Vargas"
        expect(user.username).toBe("Vargas")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})