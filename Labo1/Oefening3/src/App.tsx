
const App = () => {

  const numbers:number [] = [1,2,3,4,5,6,7,8,9,10];
  
  interface Student {
    id:number;
    name:string;
    age:number;
  }

  const students:Student[] = [
    {id:1,name:"Jef",age:23},
    {id:2,name:"Jan",age:32},
    {id:3,name:"Joris",age:12},
    {id:4,name:"Andie",age:34},
    {id:5,name:"Senne",age:26},
    {id:6,name:"Karam",age:28}
  ]

  

  return (
   <>
     <h1>Labo 1: Lijsten</h1>
     <ul>
      {numbers.map((number) =>(
        <li key={number}>{number}</li>
      ))}
     </ul>
    </>
  );
};

export default App;