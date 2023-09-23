import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Home from "./components/layout/Home";
import AuthForm from "./components/auth/AuthForm";
import NotFound from "./components/layout/NotFound";
import Products from "./components/products/Products";
import Checkout from "./components/checkout/Checkout";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/men", element: <Products category="men" /> },
    { path: "/women", element: <Products category="women" /> },
    { path: "/kids", element: <Products category="kids" /> },
    { path: "/join", element: <AuthForm /> },
    { path: "/checkout", element: <Checkout /> },
    { path: '*', element: <NotFound /> }
]);

function App() {
    return (
        <>
            <Toaster toastOptions={{
                className: '',
                style: {
                    padding: '1rem',
                    fontSize: '1.25rem',
                    borderRadius: '0.5rem',
                },
            }} />
            <RouterProvider router={router} />
        </>
    )
}

export default App;