const RandomColor = () =>{
const color:string[] = ["red","blue","green","yellow"];
const index:number = Math.floor(Math.random() * 5)
return color[index];
}

interface ColorSquareProps{
  color:string;
  size:number;
}

const ColorSquare =({color,size} : ColorSquareProps)=>{
return  <div style={{background:color, width:size,height:size}}></div>
}

const App =() =>{
  const size:number =  100
  return(
    <>
      {Array.from({length:size},(_,i) => <ColorSquare color={ RandomColor()} size={size} />)}
    </>
  )
}

export default App;