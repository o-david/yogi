// Import the necessary modules.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

// Export the router instance.
export default App;

// **Comments:**

// * The `createBrowserRouter` function is used to create a new router instance.
// * The `path` property of a route object specifies the URL path that will trigger the route.
// * The `element` property of a route object specifies the component that will be rendered for that route.
// * The `Home` component is imported from the `../pages/Home` file.
// * The router instance is exported as the default export of the file.
