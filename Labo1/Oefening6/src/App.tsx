const App = ()=>{
const table: number[][] = Array.from({ length: 10 }, (_, rowIndex) =>
    Array.from({ length: 10 }, (_, colIndex) => (rowIndex + 1) * (colIndex + 1))
  );

  return (
    <table border={1} style={{ borderCollapse: "collapse", textAlign: "center" }}>
      <tbody>
        {table.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} style={{ padding: "5px" }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;