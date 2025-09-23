interface letterButtonProps {
  url:string;
}

const LetterButton = ({url}:letterButtonProps) =>{
  return <button type="button"><img src={url} alt="letter"/></button>
}


const Alfabet = () => {
  const alphabetLetters = Array.from({ length: 26 }, (_, i) => {
    const letter = String.fromCharCode(65 + i);
    return {
      url: `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${letter}.png`,
    };
  });

  // Je hebt hier **function body**, dus moet expliciet `return` gebruiken
  return (
    <div>
      {alphabetLetters.map((item, index) => (
        <LetterButton key={index} url={item.url} />
      ))}
    </div>
  );
};

const App = () => {
  return(
      <>
        <Alfabet/>
      </>
  )
}
export default App;