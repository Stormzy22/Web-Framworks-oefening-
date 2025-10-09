import { useState } from "react"

interface List{
  name:string;
  amount:number;
}


const ShoppingList = () => {
  const [list ,setList] = useState<[List]>();
  
  return(
    <>
  <div style={{margin:"0 auto",maxWidth:"400px"}}>
  <div style={{display:"grid"}}>
    <div style={{display:"flex",gap:"1rem"}}>
      <label>Name:</label>
      <input type="text"  placeholder="Name"/>
    </div>
    <div style={{display:"flex",gap:"1rem"}}>
      <label>Quantity:</label>
      <input type="number" placeholder="Quantity" />
    </div>


    <div>
      <table>
        <thead>
          <tr>
            <th style={{textAlign:"left"}}>Name</th>
            <th style={{textAlign:"center"}}>Quantity</th>
            <td style={{textAlign:"right"}}><button>Remove</button></td>
          </tr>
        </thead>
        <tbody>
          <td></td>
        </tbody>
      </table>
    </div>
    </div>
  </div>
    </>
  )
}

const App = () =>{

  return(
        <div>
          <ShoppingList/>
        </div>
  )
}

export default App;