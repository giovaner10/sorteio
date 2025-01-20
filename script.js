const nameInput = document.getElementById("nameInput");
const addNameButton = document.getElementById("addName");
const nameList = document.getElementById("nameList");
const drawButton = document.getElementById("draw");
const result = document.getElementById("result");

let names = [];

// Adicionar nome na lista
addNameButton.addEventListener("click", addName);
nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addName();
});

function addName() {
  const name = nameInput.value.trim();
  if (name && !names.includes(name)) {
    names.push(name);
    updateNameList();
    nameInput.value = "";
    drawButton.disabled = names.length < 2;
  } else {
    alert("Nome inválido ou já adicionado!");
  }
}

// Atualizar lista de nomes na tela
function updateNameList() {
  nameList.innerHTML = names.map((name) => `<li>${name}</li>`).join("");
}

// Realizar o sorteio
drawButton.addEventListener("click", () => {
  const shuffled = [...names].sort(() => Math.random() - 0.5);
  const pairs = shuffled.map((name, i) => `${name} → ${shuffled[(i + 1) % shuffled.length]}`);
  result.innerHTML = `<strong>Resultado do Sorteio:</strong><br>${pairs.join("<br>")}`;
});
