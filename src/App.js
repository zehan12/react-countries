import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <h1>Hello Countries</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "justify-between",
          textAlign: "center"
        }}
      >
        {countries.map((con) => (
          <div style={{ margin: "50px" }}>
            <h2 style={{ wordWrap: "break-word" }}>{con.name.official}</h2>
            <p style={{ margin: "20px" }}>capital: {con.capital}</p>
            <div style={{ width: "400px", textAlign: "center" }}>
              <img style={{ width: "100%" }} alt="" src={con.flags.svg} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
