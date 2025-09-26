
const RandomColor = () =>{
const color:string[] = ["red","blue","green","yellow","pink","brown"];
const index:number = Math.floor(Math.random() * color.length)
return color[index];
}

interface ColorSquareProps{
  color:string;
  size:number;
}

const ColorSquare =({color,size} : ColorSquareProps)=>{
  const handelclick:React.MouseEventHandler<HTMLDivElement> =(event) =>{
    alert(`ColorSquare clicked with color: ${color}`)
  }

  return <div style={{background:color, margin:2, width:size,height:size}} onClick={handelclick}></div>
}

const ColorKlicker = () =>{
  const size:number =  100
  const colorArray = Array.from({ length:10 }, () => RandomColor());
  return(
    <>
      <div style={{display:"flex",flexDirection:"row"}}> 
      {colorArray.map((color,index) => <ColorSquare key={index} color={ color} size={size} />)}
      </div>
    </>
  )
}

const App =() =>{
 return(
  <>
  <ColorKlicker/>
  </>
 ) 
}

export default App;