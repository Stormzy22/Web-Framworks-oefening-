const App = () =>{
const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);

return(
  <>
    { colors.map((color,i) =>(
      <div key={i} style={{width: "100%", height: "4px", backgroundColor: color}}> </div>
    ))
      }
  </>
)
}

export default App;