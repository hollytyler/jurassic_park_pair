const Dinosaur = require("./models/dinosaur.js");


const Park = require("./models/park.js");
const park1 = new Park("Jurassic Park", 100);
const dinosaur1 = new Dinosaur("t-rex", "people", 50);
const dinosaur2 = new Dinosaur("veloceraptor", "chickens", 20);
const dinosaur3 = new Dinosaur("teridactal", "bugs", 5);
park1.addDinosaur(dinosaur1);
park1.addDinosaur(dinosaur2);
park1.addDinosaur(dinosaur3);
console.log(park1);

park1.removeDinosaur(dinosaur2);
console.log(park1);

park1.findMostPopularDino();
console.log(park1)