const undefinedToNull = obj => {
    if (obj == null || typeof obj != "object") {
        if (obj == undefined) {
            return null
        }
        return obj
    }
    if (Array.isArray(obj)) {
        let newArr = []
        for (let i = 0; i < obj.length; i++) {
            const element = obj[i];
            newArr[i] = undefinedToNull(element)
        }
        return newArr
    }
    let newObj = {}
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            newObj[key] = undefinedToNull(element)
        }
    }

    return newObj
}

const person = {
    name: "John Doe",
    age: undefined,
    address: {
        street: "123 Main St",
        city: undefined,
        country: "Exampleland"
    },
    hobbies: ["reading", undefined, "coding"],
    education: {
        degree: "Bachelor's in Computer Science",
        school: "University of Example"
    }
};

