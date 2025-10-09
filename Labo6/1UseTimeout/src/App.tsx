import { useEffect, useState } from 'react'
interface RandomValueProps {
  max:number;
  min:number;
}  

const getRandomValues = (max:number,min:number) => {
  return Math.floor(Math.random() * (max - min) + min );
}

const RandomValue  = ({max,min}: RandomValueProps) =>{

  const [value,setvalue] = useState<number>(getRandomValues(max,min));
  useEffect(() => {
    const handle = setInterval(() => {
    setvalue(getRandomValues( max,min ));
    }, 1000);

    return () => {
      clearInterval(handle); 
    }
  }, [value]);
  
  return(
    <div>    
      <div>Random value between {min} and {max}: {value}</div>
    </div>
  )
}

 const CurrentTime = () =>{
const [timeNow,setTimeNow] = useState(new Date());

useEffect(() => {
 const handle =  setInterval(() => {
    setTimeNow(new Date());
  }, 1000);
  return () => {
  clearInterval(handle);
 }},[timeNow]); 
 return <div>Current time: {timeNow.toLocaleTimeString()}</div>
 }
 

 const Timer = () =>{
 const [timer,setTimer] = useState<number>(0);
 useEffect(( ) => {
 const timeCount = setInterval(() => {
 setTimer( timer => timer + 1); 
 }, 1000 );
 
 return () => {
  clearInterval(timeCount);
 }
 }, [timer]);

 return(
 <div>{timer}</div>
 );
 } 

 const App = () =>{
  return(
    <>
    <Timer/>
    <CurrentTime/> 
    <RandomValue max={100} min={1}/> 
    <RandomValue max={200} min={100}/> 
    </>
  )
 } 

 export default App; 