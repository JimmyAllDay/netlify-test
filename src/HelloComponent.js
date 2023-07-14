import React, { useState, useEffect } from 'react';
import './Hello.css';

const HelloComponent = () => {
  const [express, setExpress] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/hello`);
        const responseData = await response.json();
        setExpress(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="Hello-comp">
      <h1>React / Node / Express</h1>
      <h3>Vercel Deployment test</h3>
      {express.message ? (
        <p className="no-error">{express.message}</p>
      ) : (
        <p className="error">
          No message returned from server - app not working
        </p>
      )}
    </div>
  );
};

export default HelloComponent;
