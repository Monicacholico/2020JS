// TABS

function tabHandler(e){
  let activeTabs = document.querySelectorAll('.active');
  activeTabs.forEach(function(tab){
    tab.className = tab.className.replace('active', '');
  });
  e.target.parentElement.className += ' active';
  let element = document.getElementById(event.target.href.split("#")[1]);
  element.className += ' active';
}


let ultabs = document.getElementById('nav-tabs');
ultabs.addEventListener('click', tabHandler, false);




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
    let title = "";
    for (const pointeShoe of pointeShoes) {
      console.log(`Characteristics of `);
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




