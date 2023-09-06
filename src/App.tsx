import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Home from "./components/layout/Home";
import Products from "./components/products/Products";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/men", element: <Products category="men" /> },
    { path: "/women", element: <Products category="women" /> },
    { path: "/kids", element: <Products category="kids" /> }
]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;