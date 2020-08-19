import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);
    
    return (
        <div className="flex flex-wrap">
            <form className="grid w-full md:w-2/4 m-auto px-8 pt-6 pb-8 mb-4 mt-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Filter by Country</label>
                    <div className="relative">
                        <select 
                            className="block appearance-none w-full shadow-md border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            defaultValue=""
                            onChange={(e) => handleCountryChange(e.target.value)}
                            >
                            <option value="">Global</option>
                            {
                                fetchedCountries.map((country, i) => <option key={ i } value={ country }>{ country }</option>)
                            }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CountryPicker;