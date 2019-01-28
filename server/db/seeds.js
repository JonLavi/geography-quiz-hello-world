use hello_world;
db.dropDatabase();

db.hellos.insertMany([{
  name: "France",
  hello: "bonjour"
},
{
  name: "Spain",
  hello: "hola"
},
{
  name: "Germany",
  hello: "guten tag"
},
{
  name: "Netherlands",
  hello: "test"
}

]);
