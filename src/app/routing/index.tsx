import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../../shared/ui/layouts/main";

import { PostsListPage } from "../../pages/posts-list-page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <PostsListPage />
            },
            
            {
                path: ':id',
                element: <>todo by id</>
            },
        ]
    }
]);