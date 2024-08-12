'use client'
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [ip, setIp] = useState('');

  useEffect(() => {
    // เรียก API เพื่อดึง IP Address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIp(data.ip))
        .catch(error => console.error('Error fetching IP:', error));
  }, []);

  return (
      <div>
        <h1>Your IP Address</h1>
        <p>{ip ? `Your IP is ${ip}` : 'Loading...'}</p>
      </div>
  );
}
