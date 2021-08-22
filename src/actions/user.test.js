const user = require("./user")
// @ponicode
describe("user.getUsersApi", () => {
    test("0", () => {
        let callFunction = () => {
            user.getUsersApi()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user.deleteUser", () => {
    test("0", () => {
        let callFunction = () => {
            user.deleteUser("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user.deleteUser("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user.deleteUser("a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user.deleteUser(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user.createUser", () => {
    test("0", async () => {
        await user.createUser("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "dummy_name", "Murray-Kynynmound", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "2017-09-29T19:01:00.000")
    })

    test("1", async () => {
        await user.createUser("7289708e-b17a-477c-8a77-9ab575c4b4d8", "dummy_name", "Baziz", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "Mon Aug 03 12:45:00")
    })

    test("2", async () => {
        await user.createUser("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "dummyName", "Zong", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality", "2017-09-29T23:01:00.000Z")
    })

    test("3", async () => {
        await user.createUser("a85a8e6b-348b-4011-a1ec-1e78e9620782", "dummyName", "Murray-Kynynmound", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "2017-09-29T19:01:00.000")
    })

    test("4", async () => {
        await user.createUser("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "dummyname", "Al Saud", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "Mon Aug 03 12:45:00")
    })

    test("5", async () => {
        await user.createUser(undefined, "", undefined, undefined, undefined)
    })
})

// @ponicode
describe("user.editUser", () => {
    test("0", async () => {
        await user.editUser("a85a8e6b-348b-4011-a1ec-1e78e9620782", "dummy_name/", "Al Saud", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles", "2017-09-29T23:01:00.000Z")
    })

    test("1", async () => {
        await user.editUser("7289708e-b17a-477c-8a77-9ab575c4b4d8", "dummy_name", "Al Saud", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "2017-09-29T19:01:00.000")
    })

    test("2", async () => {
        await user.editUser("a85a8e6b-348b-4011-a1ec-1e78e9620782", "dummyName", "Zong", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", "2017-09-29T19:01:00.000")
    })

    test("3", async () => {
        await user.editUser("7289708e-b17a-477c-8a77-9ab575c4b4d8", "dummy_name/", "Zong", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design", "2017-09-29T23:01:00.000Z")
    })

    test("4", async () => {
        await user.editUser("7289708e-b17a-477c-8a77-9ab575c4b4d8", "dummy_name/", "Zong", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", "01:04:03")
    })

    test("5", async () => {
        await user.editUser("", undefined, undefined, undefined, undefined)
    })
})
