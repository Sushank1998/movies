// import React from 'react';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Movies from './navgivation/Movies';
import News from './navgivation/News';
import MyList from './navgivation/MyList';
import Serise from './navgivation/Serise';
import MovieDetail from './innerPages/MovieDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />, 
      children: [
        {
          path: '/', 
          element: <Home /> 
        },
        {
          path: '/Movies', 
          element: <Movies />
        },
        {
          path: '/My_List', 
          element: <MyList /> 
        },
        {
          path: '/News', 
          element: <News /> 
        },
        {
          path: '/Serise', 
          element: <Serise />
        },
        {
          path: '/movie-detail',
          element: <MovieDetail /> 
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
