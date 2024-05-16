// Import the React library
import React from "react";

// Import the ReactDOM library for working with DOM elements
import ReactDOM from "react-dom/client";

// Import the CSS file for styling the application
import "./index.css";

// Import the router configuration as 'router'
import App from "./App.jsx";

// Create a root React element using ReactDOM's createRoot method and attach it to the DOM
ReactDOM.createRoot(document.getElementById("root"))

  // Render the RouterProvider with the 'router' configuration
  .render(<App />);

// **Comments:**

// - `import React from 'react';`: Import the React library. React is a popular JavaScript library for building user interfaces.

// - `import ReactDOM from 'react-dom/client';`: Import the ReactDOM library. ReactDOM is a library for rendering React components into the DOM (Document Object Model).

// - `import './index.css';`: Import the CSS file for styling the application. This CSS file should contain the styles for different components and elements in the application.

// - `import router from './App.jsx';`: Import the router configuration from the `App.jsx` file. This file likely contains the routes and components that define the application's navigation and page structure.

// - `import { RouterProvider } from 'react-router-dom';`: Import the `RouterProvider` component from the `react-router-dom` library. The `RouterProvider` component is used to provide routing capabilities to the application.

// - `ReactDOM.createRoot(document.getElementById('root'))`: Create a root React element using ReactDOM's `createRoot` method. The `createRoot` method takes the DOM element where the React application will be rendered as an argument. In this case, the `root` element from the HTML document is used.

// - `.render(<RouterProvider router={router} />);`: Render the `RouterProvider` component with the `router` configuration. This line of code essentially tells ReactDOM to render the application's routing structure and components into the DOM. The `RouterProvider` component provides the necessary context for routing to work properly.

// Overall, this code sets up the basic structure for a React application with routing capabilities. It imports the necessary libraries, defines the routing configuration, and renders the application into the DOM.
