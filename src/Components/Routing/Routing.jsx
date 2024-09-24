import { Suspense } from 'react'
import { Routes,Route } from 'react-router-dom'
import { lazy} from "react"
import {Facebook} from 'react-content-loader'



const Home = lazy(()=>import('../../Pages/Home'))
const CoinDetailsPage = lazy(()=>import('../../Pages/CoinDetailsPage'))


function Routing() {

  return (


  <Routes>
    <Route path='/' element={<Suspense fallback={<Facebook/>}> <Home/></Suspense>}/>
    <Route path="/details/:coinId" element ={<Suspense fallback={<Facebook/>}><CoinDetailsPage/></Suspense>}/>
  </Routes>
  )
}

export default Routing