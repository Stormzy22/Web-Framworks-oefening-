import cherry from "./assets/cherry.png";
import lemon from "./assets/lemon.png";
import melon from "./assets/melon.png";
import prune from "./assets/prune.png";
import seven from "./assets/seven.png";
const slotImages:string[] = [cherry,lemon,melon,prune,seven];

 const slot_number:number = 3;
  const getRandomSlots = (number:number) => {
  const slotNumber:number[] = [];
    for(let i = 0; i < number; i++)
    {
        slotNumber.push(Math.floor(Math.random() * 5))
    }
    return slotNumber 
}
const App = () => {
const slot:number[]= getRandomSlots(slot_number)
let winning:boolean = true;
for(let i = 0; i< slot.length;i++){
  if(slot[i] !== slot[0])
    winning = false;
}
return (
  <div>
    <h1>Labo1: Slots</h1>
    {slotImages.map(l => <img> src={l} alt={l} width="100"</img>)}
      {winning ? <p>Je hebt gewonnen!</p> : <p>Je hebt verloren</p>}
      {slot.map(slot => <img> src={slotImages[slot]} alt={slotImages[slot]} width="100"</img>)}
    </div>
  )
};

export default App;