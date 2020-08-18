import React from 'react';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="max-w-sm rounded overflow-hidden shadow-lg border-b-4 border-yellow-300">
                <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 flex items-center">
                        Infected
                    </p>
                    <div className="font-bold text-gray-800 text-xl mb-2">
                        <CountUp start={ 0 } end={ confirmed.value } duration={ 2.5 } separator="," />
                    </div>
                    <p className="text-gray-700 text-base">{ new Date(lastUpdate).toDateString() }</p>
                    <p className="text-sm text-gray-600 text-base">Number of active cases of C19</p>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg border-b-4 border-teal-300">
                <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 flex items-center">
                        Recovered
                    </p>
                    <div className="font-bold text-gray-800 text-xl mb-2">
                        <CountUp start={ 0 } end={ recovered.value } duration={ 2.5 } separator="," />
                    </div>
                    <p className="text-gray-700 text-base">{ new Date(lastUpdate).toDateString() }</p>
                    <p className="text-sm text-gray-600 text-base">Number of recoveries from C19</p>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg border-b-4 border-red-300">
                <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 flex items-center">
                        Deaths
                    </p>
                    <div className="font-bold text-gray-800 text-xl mb-2">
                        <CountUp start={ 0 } end={ deaths.value } duration={ 2.5 } separator="," />
                    </div>
                    <p className="text-gray-700 text-base">{ new Date(lastUpdate).toDateString() }</p>
                    <p className="text-sm text-gray-600 text-base">Number of death caused by C19</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;