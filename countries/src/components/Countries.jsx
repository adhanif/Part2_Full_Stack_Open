import React from "react";

export default function Countries({ countries, countryQuery }) {
  const countriesToShow = !countryQuery
    ? countries
    : countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(`${countryQuery.toLowerCase()}`);
      });
  //   console.log(countriesToShow);
  return (
    <div>
      {countryQuery && countriesToShow.length > 10 ? (
        <p>Too many matches, specify another filter!</p>
      ) : (
        countriesToShow.map((country) => {
          return (
            <div key={country.name.common}>
              <p>{country.name.common}</p>
            </div>
          );
        })
      )}
      {countryQuery && countriesToShow.length === 1
        ? countriesToShow.map((country) => {
            return (
              <div key={country.name.common}>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>capital {country.area}</p>
                <h1>languages:</h1>
                <ul>
                  {Object.values(country.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
                <img src={country.flags.png} alt="" />
              </div>
            );
          })
        : null}
    </div>
  );
}
