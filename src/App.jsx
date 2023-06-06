import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthProvider from './providers/AuthProvider';
import { router } from './route/Route';

function App() {

  return (
    <>
      <AuthProvider>
        <Toaster />
        <div className="container mx-auto">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
