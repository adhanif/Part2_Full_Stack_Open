import React from "react";
import Country from "./Country";
import { useState } from "react";
import Weather from "./Weather";

export default function Countries({ countries, countryQuery }) {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(null);

  const countriesToShow = !countryQuery
    ? countries
    : countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(`${countryQuery.toLowerCase()}`);
      });

  const handleClick = (index) => {
    if (selectedCountryIndex === index) {
      setSelectedCountryIndex(null);
    } else {
      setSelectedCountryIndex(index);
    }
  };

  return (
    <div>
      {countryQuery && countriesToShow.length > 10 ? (
        <p>Too many matches, specify another filter!</p>
      ) : countryQuery && countriesToShow.length === 1 ? (
        countriesToShow.map((country) => {
          return (
            <div key={country.name.common}>
              <Country country={country} />
              <Weather country={country} />
            </div>
          );
        })
      ) : countryQuery && countriesToShow.length < 10 ? (
        countriesToShow.map((country, index) => {
          return (
            <div key={country.name.common}>
              <p>{country.name.common}</p>
              <button onClick={() => handleClick(index)}>
                {selectedCountryIndex === index ? "close" : "show"}
              </button>
              {selectedCountryIndex === index && <Country country={country} />}
            </div>
          );
        })
      ) : (
        countriesToShow.map((country) => {
          return (
            <div key={country.name.common}>
              <p>{country.name.common}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
