use hello_world;
db.dropDatabase();

db.hellos.insertMany([
  {name: "France", hello: "bonjour"},
  {name: "Spain", hello: "hola"},
  {name: "Germany", hello: "guten tag"},
  {name: "Netherlands", hello: "Hallo"},

  {name: "Ukraine", hello: "Dobriy den"},
  {name: "Protugal", hello: "Olá"},
  {name: "Denmark", hello: "Hej"},
  {name: "Estonia", hello: "Tere"},
  {name: "Italy", hello: "Ciao"},
  {name: "Slovakia", hello: "Ahoj"},

  {name: "Bulgaria", hello: "Zdraveĭte"},
  {name: "Iceland", hello: "Góðan dag"},
  {name: "Hungaria", hello: "Jó napot"},
  {name: "Greece", hello: "Geia sas}",
  {name: "Lithuania", hello: "Sveiki"},
  {name: "Croatia", hello: "Bok"},


  {name: "Macedonia", hello: "Zdravo"},
  {name: "Bosnia", hello: "Dobar dan"},
  {name: "Belarus", hello: "Zdravstvujtie"},
  {name: "Finnland", hello: "Hei"},
  {name: "Norway", hello: "Hallo"},
  {name: "Sweden", hello: "Hallå"},
  {name: "Poland", hello: "Cześć"},
  {name: "Malta ", hello:"Bonjour"},
  {name: "Romania", hello: "Salut"},
  {name: "Serbia", hello: "Zdravo"},
  {name: "Slovenia", hello: "Živjo"},
  {name: "Georgia", hello: "Komentari"},
  {name: "Welsh", hello: "Helo"}, // "not a country"
  {name: "Albania ", hello: "Përshëndetje"},
  {name: "Armenia", hello: "Barev Dzez"},

  {name: "Frisian", hello: "Goeie dei"},

  {name: "Turkey", hello: "Merhaba"},
  {name: "Russia", hello: "Zdravstvuyte"},
  {name: "Luxembourg", hello: "Moïen"}, // also german and french
  {name: "Basque", hello: "Kaixo"},
  {name: "Czech Republic", hello: "Ahoj"},
]);
