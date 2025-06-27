import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';




const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};


function App() {
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home>Ashish Patel</Home>,
        }
      ],
    },
    {
      path: '*',
      element: <h1>Not Found Page</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
