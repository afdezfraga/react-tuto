import { useState, useEffect } from "react";

const CH1 = () => {

  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  console.log("Component rendered");

  useEffect(() => {
    console.log("useEffect called");
    fetch(`https://swapi.dev/api/people/${count}/`)
      .then(response => response.json())
      .then(data => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <h2> The count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Get next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default CH1;