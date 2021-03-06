import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Charts = ({ data: { confirmed, recovered,deaths }, country }) => {
    const [ dailyData, setDailyData ] = useState({});
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
        ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#faf089',
                        fill: false
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#feb2b2',
                        fill: false
                    }],
                }}
            />
        ) : null
    );

    const barChart = (
        confirmed
            ? (
                <Bar 
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                '#faf089',
                                '#81e6d9',
                                '#feb2b2'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }}
                />
            ) : null
    );
    
    return (
        <div className="flex flex-wrap">
            <div className="grid w-full md:w-3/4 m-auto">
                {country ? barChart : lineChart}
            </div>
        </div>
    )
}

export default Charts;