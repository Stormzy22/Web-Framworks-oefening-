import { useEffect, useState } from "react";
const [error,setError] = useState<Error| null>(null);

const Pokedex = (limit:number) =>{
limit = 151;
useEffect(() => {
    const fetchData = async() => {
        let respons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        if(!respons.ok){
            throw new Error("Something went wrong fetching data");
        }
        const result= await respons.json();
        if(cancelled) return;
        setData(result); 

}
return(

)
}