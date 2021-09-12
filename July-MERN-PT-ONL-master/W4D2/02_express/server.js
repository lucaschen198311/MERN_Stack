const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

const example = () => {
  const newPerson = {
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
  return newPerson;
};

app.get("/api", (req, res) => {
  res.json({ message: "HELLO BLAH!" });
});

app.get("/api/random-url", (req, res) => {
  res.json({ message: "You have hit the random url congrats!" });
});

app.get("/api/people/new", (req, res) => {
  const person = example();
  console.log(person);
  res.json(person);
});

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
