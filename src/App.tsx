import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Home from "./components/layout/Home";
import Products from "./components/products/Products";
import NotFound from "./components/layout/NotFound";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/men", element: <Products category="men" /> },
    { path: "/women", element: <Products category="women" /> },
    { path: "/kids", element: <Products category="kids" /> },
    { path: '*', element: <NotFound /> }
]); 

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;