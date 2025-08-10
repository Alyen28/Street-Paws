var factList = [
  "Mais de 200 milhões de cães e 400 milhões de gatos vivem nas ruas em condições de abandono.",
  "Cerca de 35% da população mundial de gatos e cachorros está ou nas ruas ou em abrigos à procura de um lar.",
  "Estima-se que de 4 a 5 milhões de cães de rua são sacrificados (eutanasiados) a cada ano no mundo.",
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

factButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count += 1;
  if (count == factList.length) {
    count = 0;
  }
}