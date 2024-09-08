import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../../shared/ui/layouts/main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <>Main Page</>
            },
            
            {
                path: ':id',
                element: <>todo by id</>
            },
        ]
    }
]);