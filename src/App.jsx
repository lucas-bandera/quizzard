import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { RouterProvider } from 'react-router-dom';
import { Rating } from './pages/Rating';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/rating',
    element: <Rating />
  }
])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
