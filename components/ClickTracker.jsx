'use client';
import { useEffect } from 'react';
import axios from 'axios';

const ClickTracker = () => {
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { data } = await axios.get(
          'https://ipinfo.io?token=dc8350ead2a2ca'
        );

        // Prevent sending data if IP is local or private
        const ip = data.ip || '';
        const hostname = data.hostname || '';

        if (
          ip === '127.0.0.1' ||
          ip === '::1' ||
          ip.startsWith('192.168') ||
          ip.startsWith('10.') ||
          ip.startsWith('172.') ||
          hostname.includes('localhost')
        ) {
          console.log('Skipping local/private IP tracking:', ip);
          return null;
        }

        return {
          ip,
          hostname,
          city: data.city,
          region: data.region,
          country: data.country,
          loc: data.loc,
          org: data.org,
          postal: data.postal,
          timezone: data.timezone,
        };
      } catch (error) {
        console.error('Error getting user details:', error);
        return null;
      }
    };

    const trackPageVisit = async () => {
      const userDetails = await getUserDetails();
      if (!userDetails) return;

      const timestamp = new Date().toISOString();

      try {
        await axios.post('/api/visit', {
          ...userDetails,
          timestamp,
        });
      } catch (error) {
        console.error('Error sending visit data:', error);
      }
    };

    trackPageVisit();
  }, []);

  return null;
};

export default ClickTracker;
