import './App.css'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import First from './Components/First'
import One from './Components/Context_API/One'
import UseReducer from './Components/UseReducer';
import Home from './Components/Home'
import Order from './Components/Order'
import VIP from './Components/VIP'
import Team from './Components/Team'
import Me from './Components/Me'
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AuthContainer from './Components/Authenticator';


const router = createBrowserRouter([
  {
    path: '/',
    element:
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: '/Order',
    element:
      <div>
        <Navbar />
        <Order />
      </div>
  },
  {
    path: '/vip',
    element:
      <div>
        <Navbar />
        <VIP />
      </div>
  },
  {
    path: '/team',
    element:
      <div>
        <Navbar />
        <Team />
      </div>
  },
  {
    path: '/my',
    element:
    <div>
      <Navbar/>
      <Me/>
    </div>
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
          {/* <SignIn/> */}
          {/* <SignUp/> */}
          {/* <AuthContainer/> */}
    </>
  )
}
export default App



