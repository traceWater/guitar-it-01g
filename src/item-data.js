import redprs from "./img/items/redprs.png";
import redfade from "./img/items/redprs.png";
import ibanezaz from "./img/items/ibanezaz.png";
import ultrabass from "./img/items/ultrabass.png";
import yinyang from "./img/items/silversky.png";
import breedloveoregon from "./img/items/breedloveoregon.png";
import martinamber from "./img/items/martinamber.png";
import taylorvclass from "./img/items/taylorvclass.png";
import alverezyairi from "./img/items/alverezyairi.png";
import silversky from "./img/items/silversky.png";

// Price must be stored in cents
// Otherwise floating point precision can be an issue
const createItemObject = (id, name, image, shortDescription, price) => {
  return { id, name, image, shortDescription, price };
};

const data = {
  1: createItemObject(1, "Redprs Electric", redprs, "Redprs Electric", 12345),
  2: createItemObject(2, "Redfade Electric", redfade, "Redfade Electric", 23456),
  3: createItemObject(3, "Ibanezaz Electric", ibanezaz, "Ibanezaz Electric", 30050),
  4: createItemObject(4, "UltraBass Electric", ultrabass, "UltraBass Electric", 22222),
  5: createItemObject(5, "YinYang Electric", yinyang, "YinYang Electric", 22222),
  6: createItemObject(6, "breedloveoregon Acustic", breedloveoregon, "breedloveoregon Acustic", 7345),
  7: createItemObject(7, "Martinamber Acustic", martinamber, "martinamber Acustic", 50000),
  8: createItemObject(8, "Taylorvclass Acustic", taylorvclass, "Taylorvclass Acustic", 12550),
  9: createItemObject(9, "Alverezyairi Acustic", alverezyairi, "Alverezyairi Acustic", 8080),
  10: createItemObject(10, "Silversky Acustic", silversky, "Silversky Acustic", 8080),
};

export default data;
