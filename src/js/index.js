function getCount(parent, getChildrensChildren){
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for(var i=0; i < children; i++){
      if(parent.childNodes[i].nodeType != 3){
          if(getChildrensChildren)
              relevantChildren += getCount(parent.childNodes[i],true);
          relevantChildren++;
      }
  }
  return relevantChildren;
}

const buttonDice = document.querySelector("#buttonDice");
const buttonDelete = document.querySelector("#buttonDelete");
let currentClass = "dice1";
let container = document.querySelector(".container2")

buttonDice.addEventListener("click",() =>{

  let dice = document.querySelector(".dice");

  if(getCount(container,true) == 12){
    alert("El historial esta lleno. Borrelo para seguir tirando el dado.")
  } else {
    const dicesImages = ["dice1", "dice2", "dice3",
                         "dice4", "dice5", "dice6"]

    let numberDice = Math.floor(Math.random() * 6);

    dice.classList.remove(currentClass);
    dice.classList.add(dicesImages[numberDice]);
    container.innerHTML += `<div class="history ${dicesImages[numberDice]}"></div>`;
    currentClass = dicesImages[numberDice];
  }
});

buttonDelete.addEventListener("click",() =>{
  container.innerHTML = "";
})