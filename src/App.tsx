import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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
    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <Toaster toastOptions={{ style: { padding: '1rem', fontSize: '1.25rem', borderRadius: '0.5rem' }}} />
            </QueryClientProvider>
        </>
    )
}

export default App;