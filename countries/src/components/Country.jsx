import React from "react";

export default function Country({ country }) {
  return (
    country && (
      <div key={country.name.common}>
        <div>
          <h1>{country.name.common}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <h1>languages:</h1>
          <ul>
            {Object.values(country.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt="" />
        </div>
      </div>
    )
  );
}
