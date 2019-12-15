let pointeShoes = [
  {
    name: " Alpha",
    brand: " Bloch",
    feetType: "Egyptian",
    level: "Advanced",
    strength: "Strong",
    toesLength: "Long",
    arcProfile: "High",
    width: "Narrow",
    id: 6
  },
  {
    name: " Elite",
    brand: " Grishko",
    feetType: "Giselle",
    level: "Intermediate",
    strength: "Medium",
    toesLength: "Short",
    arcProfile: "Low",
    width: "Wide",
    id: 7
  },
  {
    name: " Balance",
    brand: " Bloch",
    feetType: "Giselle",
    level: "Beginner",
    strength: "Low",
    toesLength: "Short",
    arcProfile: "Low",
    width: "Wide",
    id: 8
  },
  {
    name: " Balance",
    brand: " Bloch",
    feetType: "Giselle",
    level: "Beginner",
    strength: "Low",
    toesLength: "Short",
    arcProfile: "Low",
    width: "Wide",
    id: 9
  },
  {
    name: " Balance",
    brand: " Bloch",
    feetType: "Giselle",
    level: "Beginner",
    strength: "Low",
    toesLength: "Short",
    arcProfile: "Low",
    width: "Wide",
    id: 10
  },
  {
    name: " Balance",
    brand: " Bloch",
    feetType: "Giselle",
    level: "Beginner",
    strength: "Low",
    toesLength: "Short",
    arcProfile: "Low",
    width: "Wide",
    id: 11
  },
  {
    name: " Balance",
    brand: " Bloch",
    feetType: "Giselle",
    level: "Beginner",
    strength: "Low",
    toesLength: "Short",
    arcProfile: "Low",
    width: "Wide",
    id: 12
  },
  {
    name: " Balance",
    brand: " Bloch",
    feetType: "Giselle",
    level: "Beginner",
    strength: "Low",
    toesLength: "Short",
    arcProfile: "Low",
    width: "Wide",
    id: 14
  }
];

let i = 0;

function displaying() {
    for (const pointeShoe of pointeShoes) {
      console.log(`The characteristics of ${pointeShoe[i]} #${i}  are: `);
      for (const characteristic in pointeShoe) {
        // console.log(characteristic);
        console.log(`${characteristic} : ${pointeShoe[characteristic]}`);
      }
      i++;
    }
}

// for (const pointeShoe of pointeShoes) {
//   console.log(`#${i}`);
//   for (const characteristic in pointeShoe) {
//     console.log(characteristic);
//     console.log(pointeShoe[characteristic]);
//   }
//   i++;
// }




