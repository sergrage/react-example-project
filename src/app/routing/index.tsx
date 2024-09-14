import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../../shared/ui/layouts/main';
import { PostsListPage } from '../../pages/posts-list-page';
import PrivateRoute from '../privateRoute';

import {store} from "@/app/auth/model"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PostsListPage />,
      },

      {
        path: ':id',
        element: (<PrivateRoute isAunteficated={store.isAunteficated}> <>todo by id</> </PrivateRoute>),
      },
    ],
  },
])
