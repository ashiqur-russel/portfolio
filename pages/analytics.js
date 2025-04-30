import { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
    const [data, setData] = useState({ countryPageVisits: {}, countryClicks: {} });

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await axios.get('/api/analytics');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };
        fetchAnalytics();
    }, []);

    return (
        <div>
            <h1>Analytics</h1>
            <h2>Page Visits by Country:</h2>
            <ul>
                {Object.entries(data.countryPageVisits).map(([country, visits]) => (
                    <li key={country}>
                        {country}: {visits.count} visits
                        <ul>
                            {visits.data.map((visit, index) => (
                                <li key={index}>
                                    <strong>IP:</strong> {visit.ip} <strong>Timestamp:</strong> {visit.timestamp}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <h2>Clicks by Country:</h2>
            <ul>
                {Object.entries(data.countryClicks).map(([country, count]) => (
                    <li key={country}>
                        {country}: {count} clicks
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Analytics;
