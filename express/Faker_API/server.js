const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName:  faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFake;
};

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(newFakeUser);
    res.json(newFakeUser);
  });

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    console.log(newFakeCompany);
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    console.log([newFakeUser, newFakeCompany]);
    res.json([newFakeUser, newFakeCompany]);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );