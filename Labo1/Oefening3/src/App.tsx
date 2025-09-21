interface Student {
  id:number;
  name:string;
  age:number;
}
const app = () => {
  const numbers:number[] = [1,2,3,4,5,4,3];
  const students:Student[] = [
    {id:0,name:"Jef",age:34},
    {id:1,name:"Jan",age:54},
    {id:2,name:"Joris",age:34},
    {id:3,name:"Andie",age:34},
    {id:4,name:"Senne",age:34},
  ]
  return(
      <div>
        <h1>Labo1: Lijsten</h1>
        <ul>
          {
            numbers.map((number,index) => <li key={index}>{number}</li>)
          }
        </ul>
        <h1>Studentenlijst</h1>
        <ol>
          {
              students.map((student) => <li key={student.id}>{student.name}</li>)
          }
        </ol>
        <h1>Studentenlijst</h1>
        <ol>
          {
              students.filter(student => student.name.startsWith("J")).map((student) => <li key={student.id}>{student.name}</li>)
          }
        </ol>
        <select>
          {students.map(s => (<option>{s.name}</option>))}
        </select>
        <table>
          <thead>
            <th>Naam</th>
            <th>Leeftijd</th>
          </thead>
          <tbody>
            <tr>
            {students.map((s) => <td key={s.id}>{s.name}</td>)}
            {students.map((s) => <td key={s.id}>{s.age}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
  )
} 