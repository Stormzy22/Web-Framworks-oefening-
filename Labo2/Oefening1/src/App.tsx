interface HeaderProps {
  title:string;
  subtitle:string;
}
const Header =({title,subtitle} : HeaderProps) =>{
  return(
    <>
    <h1>{ title }</h1>
    <h2>{ subtitle }</h2>
    </>
  )
}

interface ListProps {
  items:string[];
}

interface ListItemProps{
  text:string;
}

const ListItem = ({text}:ListItemProps) =>{
    return <li>{text}</li>
}


const Lists = ({items}:ListProps) =>{
  return(
    <>
        <ul>
        {items.map((item,index)=> 
          (<ListItem key={index} text={item}/>))}
        </ul>
    </>
  )
}


interface FooterProps {
  copy:string;
  year:number;
}

const Footer = ({copy,year}:FooterProps) =>{
  return(
  <>
    <p> @ {copy} ({year})</p>
  </>
  )
}

const App = () =>{
  let items:string[] = ["Item1","Item2","Item3"];
  return(
    <div>
    <Header title="Labo2" subtitle="Basis components"/>
    <Lists items={items}/>
    <Footer copy="Andie Similon" year={2022}/>
    </div>
  )
}

export default App;