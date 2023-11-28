import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Body from './pages/Body'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route path="create" element={<Body />} />
     
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
