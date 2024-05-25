const GenerateWorld = (rows, cols, targetElement) => {
  const matrix = createMatrix(rows, cols);

  const container = document.createElement("div");
  container.classList = "game-container";

  matrix.forEach((row, rowIndex) => {
    const divRow = document.createElement("div");
    divRow.className = "row";
    row.forEach(([i, j]) => {
      const divCol = document.createElement("div");

      divCol.classList.add("col");

      divCol.dataset.i = i;
      divCol.dataset.j = j;

      const img = document.createElement("img");
      const imgName = getImageName(i, j, rows);
      if (imgName) {
        img.src = `/assets/images/board_images/${imageMap[imgName]}`;
        img.alt = imgName;
        console.log(imgName);
        divCol.classList.add(imgName);
      }

      divCol.appendChild(img);
      divRow.appendChild(divCol);
    });
    container.appendChild(divRow);
  });

  document.querySelector(`.${targetElement}`).appendChild(container);
};

const createMatrix = (rows, cols) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push([i, j]);
    }
    matrix.push(newRow);
  }
  return matrix;
};

const imageMap = {
  stone: "stone.png",
  stone1: "stone1.png",
  bridge: "bridge.png",
  mushrooms: "mushrooms.png",
  potato: "potato.png",
  carrot: "carrot.png",
  ground: "ground.png",
  grass_block: "grass_block.png",
  tree: "tree.png",
  cat: "cat.png",
  dog: "dog.png",
  horse: "horse.png",
  horse2: "horse2.png",
  horse3: "horse3.png",
  grass: "grass.png",
  orange: "orange.png",
  spider: "spider.png",
  dragon: "dragon.png",
  sky: "sky.png",
};

const getImageName = (i, j, rows) => {
  if (i === rows - 1) return "stone";
  if (i === rows - 2) return j % 8 === 0 ? "bridge" : "stone1";
  if (i === rows - 3) {
    if (j % 3 === 0) return "carrot";
    if (j % 2 === 0) return "potato";
    return "mushrooms";
  }
  if (i === rows - 4 || i === rows - 5) return "ground";
  if (i === rows - 6) return "grass_block";
  if (i === rows - 7) {
    switch (j) {
      case 5:
        return "tree";
      case 0:
        return "cat";
      case 7:
        return "dog";
      case 14:
        return "horse2";
      case 21:
        return "horse";
      case 28:
        return "horse3";
      default:
        return "grass";
    }
  }
  if (i === rows - 8) {
    if (j === 5) return "tree";
    if (j === 4 || j === 6) return "orange";
    return j % 8 === 0 ? "spider" : "grass";
  }
  if (i === rows - 9) return j >= 4 && j <= 6 ? "orange" : "grass";
  if (i < rows - 9) return i === 3 && (j === 5 || j === 15) ? "dragon" : "sky";
  return "";
};

export default GenerateWorld;
