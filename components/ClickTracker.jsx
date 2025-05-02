import { useEffect } from 'react';
import axios from 'axios';

const ClickTracker = () => {
    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const response = await axios.get('https://ipinfo.io?token=dc8350ead2a2ca');
                
                return {
                    ip: response.data.ip,
                    hostname: response.data.hostname,
                    city: response.data.city,
                    region: response.data.region,
                    country: response.data.country,
                    loc: response.data.loc,
                    org: response.data.org,
                    postal: response.data.postal,
                    timezone: response.data.timezone,
                };
            } catch (error) {
                console.error('Error getting user details:', error);
                return null; 
            }
        };

        const trackPageVisit = async () => {
            const userDetails = await getUserDetails();
            const timestamp = new Date().toISOString();

            if (!userDetails) {
                console.log("Skipping visit tracking due to missing user details.");
                return;
            }

            const clickData = {
                ...userDetails, 
                timestamp,    
            };

            try {
                await axios.post('/api/visit', clickData);
                console.log('Page visit data sent successfully');
            } catch (error) {
                console.error('Error sending visit data:', error);
            }
        };

        trackPageVisit(); 

    }, []); 

    return null; 
};

export default ClickTracker;
