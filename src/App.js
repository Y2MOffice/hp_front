import { useState } from "react";
import axios from "axios";

function App() {
  const [testValue, setTestValue] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setTestValue(e.target.value);
  };
  const fetchTest = async () => {
    const response = await axios.post("/api", {
      name: testValue,
    });
    console.log(response.data);
  };
  return (
    <>
      <h1>TEST</h1>
      <select id="test-select" value={testValue} onChange={handleSearch}>
        <option value="test1">test1</option>
        <option value="test2">test2</option>
        <option value="test3">test3</option>
      </select>
      <button onClick={fetchTest}>click</button>
    </>
  );
}

export default App;
