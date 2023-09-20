import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import RecipesView from "./views/RecipesView"
import Contact from "./views/Contact";
import Login from "./views/Login";
import AppNav from "./components/AppNav";
import Register from "./views/Register";
import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";
import Footer from "./components/Footer";
import RecipeDetails from "./views/RecipeDetails";
import { AuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { app } from "./config/firebaseConfig";


function App() {

  console.log(app)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage/>} >
        <Route index element={<Home/>} />
        <Route path="recipes" element={<RecipesView/>} />
        <Route path="recipes/:id" element={
          <ProtectedRoute>
            <RecipeDetails />
          </ProtectedRoute>  
        } />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    )
  );  

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  )
}

const Root = () => {
  return (
    <>
      <AppNav/>
      <Outlet />
      <Footer/>
    </>
  )
}
export default App
