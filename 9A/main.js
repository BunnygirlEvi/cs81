const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

const keys = Object.keys(MOUNTAINS[0]);
const table = document.createElement("table");
document.getElementById("mountains").appendChild(table);

const row1 = document.createElement("tr");
for (const i of keys) {
  let header = document.createElement("th");
  let headerText = document.createTextNode(i);
  header.appendChild(headerText);
  row1.appendChild(header);
  row1.style.backgroundColor = "black";
  row1.style.color = "white";
  table.appendChild(row1);
}

for (const temporary of MOUNTAINS) {
  let rows = document.createElement("tr");
  for (const o of keys) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(temporary[o]);
    if (!isNaN(temporary[keys[o]])) {
      cell.style.textAlign = "right";
    }
    cell.appendChild(cellText);
    rows.appendChild(cell);
  }
  table.appendChild(rows);
}
