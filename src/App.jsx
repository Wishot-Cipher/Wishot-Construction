import {  createContext } from 'react'
import Button from 'react-bootstrap/Button'
import axios from "axios"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Route, Router, Routes} from "react-router-dom"
import { Construct } from './Screens/Construct'
import { Gallery } from './Components/Gallery'
import { ContactForm } from './Components/ContactForm'
// import './App.css'


export const App = () =>
 {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Construct />}/>
      <Route path='/gallery' element ={<Gallery />}/>
      <Route path='/contact' element ={<ContactForm />}/>
    </Routes>
    </>
  )
}

export default App
