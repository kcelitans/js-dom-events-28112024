const title = document.getElementById("title");             
const list = document.getElementById("list");

title.addEventListener("mouseover", () => {               //nomaina virsrakstu kad novieto kursoru uz viņa                       
  title.textContent = "Tu esi virs teksta!";
});

title.addEventListener("mouseout", () => {
  title.textContent = "Turi peli virs manis lai nomainītu virsrakstu";            //atgriež orģinālo virsrakstu kad noņem kursoru no tā
});

setInterval(() => {
  const newItem = document.createElement("li");                                 
  newItem.textContent = `Item ${list.children.length + 1}`;                       //automātiski pievieno jaunu "item" ik pēc divām sekundēm
  list.appendChild(newItem);
}, 2000);

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {                                 //noņem "item" uzkura tiek nospiests
    event.target.remove();                                     
  }
});







