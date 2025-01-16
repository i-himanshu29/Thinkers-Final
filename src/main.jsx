import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Toaster } from 'react-hot-toast'

import { Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import TriggerPage from './Pages/TriggerPage.jsx'
import SocializerPage from './Pages/SocializerPage.jsx'
import InvestorPage from './Pages/InvestorPage.jsx'
import ResearcherPage from './Pages/ResearcherPage.jsx'
import CarrerPage from './Pages/CarrerPage.jsx'
import EventsPage from './Pages/EventsPage.jsx'
import QaPage from './Pages/QaPage.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import TeamPage from './Pages/TeamPage.jsx'
import Registration from './components/Registration.jsx'
import LoginForm from './components/LoginForm.jsx'




// way2- to create a router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/trigger' element={<TriggerPage/>}/>
        <Route path='/socializer' element={<SocializerPage/>}/>
        <Route path='/investor' element={<InvestorPage/>}/>
        <Route path='/researcher' element={<ResearcherPage/>}/>
        <Route path='/carrer' element={<CarrerPage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/q&a' element={<QaPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/teams' element={<TeamPage/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<LoginForm/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
    <Toaster position="top-right" reverseOrder={false}/>
  </React.StrictMode>,
)
