import cherry from "./assets/cherry.png";
import lemon from "./assets/lemon.png";
import melon from "./assets/melon.png";
import prune from "./assets/prune.png";
import seven from "./assets/seven.png";

const App = () => {
  const lotto:string[] = [cherry,lemon,melon,prune,seven];
  const slot1:number = Math.floor(Math.random() * 5);
  const slot2:number = Math.floor(Math.random() * 5);
  const slot3:number = Math.floor(Math.random() * 5);
  const winning:boolean = slot1 === slot2 && slot2 === slot3;
  return (
    <div>
      <h1>Labo1: Slots</h1>
      <img src={cherry} alt="cherry"width="100" />
      <img src={lemon} alt="lemon" width="100"/>
      <img src={melon} alt="melon" width="100"/>
      <img src={prune} alt="prune" width="100"/>
      <img src={seven}  alt="seven" width="100" />
      {winning ? <p>Je hebt gewonnen!</p> : <p>Je hebt verloren</p>}
      <img src={lotto[slot1]} alt="slot1" width="100" />
      <img src={lotto[slot2]} alt="slot2"  width="100"/>
      <img src={lotto[slot3]} alt="slot3" width="100"/>
    </div>
  )
};

export default App;