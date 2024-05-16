// Import the necessary libraries.
import React from 'react';
import { Outlet } from 'react-router-dom';

// Define the MainLayout functional component.
const MainLayout = () => {
  // The MainLayout component is a simple container component that renders the
  // content of its children. This allows child components to be nested within
  // the MainLayout component and have their content displayed.

  // Return the JSX for the MainLayout component.
  return (
    <>
      {/* The Outlet component is used to render the content of the child routes.
          This allows child routes to be nested within the MainLayout component and
          have their content displayed. */}
      <Outlet />
    </>
  );
};

// Export the MainLayout component.
export default MainLayout;
