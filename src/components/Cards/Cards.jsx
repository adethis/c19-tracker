import React, { Component } from 'react';
import CountUp from 'react-countup';

import infected from '../../assets/images/virus.png';
import health from '../../assets/images/wellbeing.png';
import die from '../../assets/images/death.png';

class Cards extends Component {
    render() {
        const data = this.props.data;

        if (!data.confirmed) {
            return 'Loading...';
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div className="md:flex rounded overflow-hidden shadow-lg border-b-4 border-yellow-300 p-4 bg-white">
                    <div className="md:flex-shrink-0">
                        <img src={ infected } className="mt-5" alt=""/>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                        <div className="uppercase tracking-wide text-sm text-yellow-300 font-medium">Infected</div>
                        <p className="block mt-1 text-lg leading-tight font-semibold text-gray-700">
                            <CountUp start={ 0 } end={ data.confirmed.value } duration={ 2.5 } separator="," />
                        </p>
                        <p className="text-gray-700 text-base mt-2">{ new Date(data.lastUpdate).toDateString() }</p>
                        <p className="text-xs text-gray-600">Number of active cases of C19</p>
                    </div>
                </div>

                <div className="md:flex rounded overflow-hidden shadow-lg border-b-4 border-teal-300 p-4 bg-white">
                    <div className="md:flex-shrink-0">
                        <img src={ health } className="mt-5" alt=""/>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                        <div className="uppercase tracking-wide text-sm text-teal-300 font-medium">Recovered</div>
                        <p className="block mt-1 text-lg leading-tight font-semibold text-gray-700">
                            <CountUp start={ 0 } end={ data.confirmed.value } duration={ 2.5 } separator="," />
                        </p>
                        <p className="text-gray-700 text-base mt-2">{ new Date(data.lastUpdate).toDateString() }</p>
                        <p className="text-xs text-gray-600">Number of recoveries from Covid-19</p>
                    </div>
                </div>

                <div className="md:flex rounded overflow-hidden shadow-lg border-b-4 border-red-300 p-4 bg-white">
                    <div className="md:flex-shrink-0">
                        <img src={ die } className="mt-3" alt=""/>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                        <div className="uppercase tracking-wide text-sm text-red-300 font-medium">Death</div>
                        <p className="block mt-1 text-lg leading-tight font-semibold text-gray-700">
                            <CountUp start={ 0 } end={ data.confirmed.value } duration={ 2.5 } separator="," />
                        </p>
                        <p className="text-gray-700 text-base mt-2">{ new Date(data.lastUpdate).toDateString() }</p>
                        <p className="text-xs text-gray-600">Number of death caused Covid-19</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;