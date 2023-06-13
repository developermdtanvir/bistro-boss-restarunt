import '@smastrom/react-rating/style.css';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthProvider from './providers/AuthProvider';
import { router } from './route/Route';

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>

          <Toaster />
          <div className="container mx-auto">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </QueryClientProvider>
      </AuthProvider>

    </>
  )
}

export default App
