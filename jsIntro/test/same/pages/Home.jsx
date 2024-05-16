// Import the React library
import React from 'react';

// Define the Home component as a functional component
const Home = () => {
  // Define the CSS style for the container
  const style = {
    display: 'grid', // Layout the container as a grid
    placeItems: 'center', // Center the items within the grid
    height: '100vh', // Set the height of the container to 100% of the viewport height
  };

  // Render the Home component
  return (
    <section style={style}>
      <div className="p-4 text-center shadow-md rounded-md">
        <h3>If you would like to support me, You can </h3>
        <a
          href="https://www.buymeacoffee.com/momoh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-2xl font-semibold capitalize"
        >
          buy me a coffee ☕{' '}
        </a>
      </div>
    </section>
  );
};

// Export the Home component to be used in other parts of the application
export default Home;
