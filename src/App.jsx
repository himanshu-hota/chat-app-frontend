import { Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import Home from "./pages/HomePage/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import RootLayout from "./Layouts/RootLayout";
import Profile from "./pages/Profile/Profile";
import DefaultPage from "./components/Default Page/DefaultPage";

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>


      <Toaster />
    </>
  )
}

export default App

