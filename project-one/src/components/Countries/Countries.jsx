import { use } from "react";
import Country from "../Country/Country";

const Countries = ({countries_promise}) => {
    const countryData = use(countries_promise);
    const countries = countryData.countries;
    return (
        <>
            <h1>We have : {countries.length}</h1>
            {
                countries.map(country => <Country key = {country.cca3.cca3} country = {country}></Country>)
            } 
        </>
    )
}

export default Countries;