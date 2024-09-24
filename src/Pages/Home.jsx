import React, { useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import CoinTable from '../Components/CoinTable'
import { CurrencyContext } from '../context/CurrencyContext'

function Home() {

  return (
   <>
    {/* <Navbar /> */}
<Banner/>
<CoinTable/>
   </>
  )
}

export default Home