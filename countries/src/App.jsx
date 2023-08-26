import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [countryQuery, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const handleCountryQuery = (e) => {
    setCountry(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((res) => {
        // console.log(res.data);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countryQuery]);

  return (
    <>
      <div>
        Find Countries:{" "}
        <input value={countryQuery} onChange={handleCountryQuery} />
      </div>
      <Countries countries={countries} countryQuery={countryQuery} />
    </>
  );
}

export default App;
