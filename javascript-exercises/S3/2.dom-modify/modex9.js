const p$$ = document.createElement("p");
p$$.textContent = "Voy dentro!";

const divs$$ = document.querySelectorAll(".fn-insert-here");

for (const div of divs$$) {
  div.appendChild(p$$);
}

