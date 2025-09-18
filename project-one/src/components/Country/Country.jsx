const Country = ( {country} ) => {
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h1>Name: {country.name.common}</h1>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;