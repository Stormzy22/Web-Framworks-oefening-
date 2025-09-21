
const App = () => {
  const random: number = Math.random() * 10;
  const number1: number = Math.floor(Math.random() * 10);
  const number2: number = Math.floor(Math.random() * 10);

  const add = (a:number,b:number) => {
    return a + b;
  };

  const multiply = (a:number, b:number) => {
    return a * b;
  };
  return (
    <>
    <h1>Labo 1: Expressies </h1>
      <h1>{random}</h1>
      <h1>{number1}</h1>
      <h1>{number2}</h1>
      <h1>
        {random < 5.0 ? add(number1, number2) : multiply(number1, number2)}     
      </h1>
    </>
  );
};

export default App;
