import { useEffect } from 'react';
import axios from 'axios';

const ClickTracker = () => {
    useEffect(() => {
        // Function to get the user's country using ipinfo.io
        const getUserCountry = async () => {
          try {
            // Replace 'your_api_key' with your actual ipinfo.io API key
            const response = await axios.get('https://ipinfo.io?token=dc8350ead2a2ca');
            return response.data.country;
          } catch (error) {
            console.error('Error getting country:', error);
            return 'Unknown'; // Return 'Unknown' if there is an error
          }
        };


        const trackPageVisit = async () => {
            const country = await getUserCountry(); // Get country (using ipinfo.io)
            const timestamp = new Date().toISOString(); // Get the current timestamp
          
            try {
              await axios.post('/api/visit', {
                country,
                timestamp,
              });
            } catch (error) {
            }
          };
          
    
        // Call the function to track the page visit when the page loads
        trackPageVisit();
      }, []); // Empty dependency array ensures this runs only once when the component is mounted
    

  return null; // Do not render anything visible
};

export default ClickTracker;
