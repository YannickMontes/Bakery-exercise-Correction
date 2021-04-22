const logger = require('./logger');
const Bakery = require('./bakery.js');

const bakery = new Bakery();

bakery.on('EnterBakery', (obj) => {
  console.log(`${obj.name} Enter the bakery. People in bakery: ${bakery.getNbPeople()}.`);
});

bakery.on('ExitBakery', (obj) => {
  console.log(`${obj.name} Exit the bakery. People in bakery: ${bakery.getNbPeople()}.`);
});

bakery.enter("Patrick");
bakery.exit("Patrick");
bakery.enter("Anne");
bakery.enter("Alicia");
bakery.exit("Alicia");
bakery.exit("Anne");