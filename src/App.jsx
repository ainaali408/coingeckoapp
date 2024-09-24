import { useState } from 'react'

import './App.css'
import './index.css'
import CoinTable from './Components/CoinTable'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Home from './Pages/Home'
import { CurrencyContext } from './context/CurrencyContext'
import Routing from './Components/Routing/Routing'

function App() {
  // const [currency,setCurrency] = useState('usd')

  return (
    <>
      {/* <div>
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold">Hello, DaisyUI!</h1>
    <button className="btn btn-primary">Click Me</button>
  </div>
</div> */}
{/* <CurrencyContext.Provider value={{currency,setCurrency}}> */}
<Navbar/>
<Routing/>
{/* // </CurrencyContext.Provider> */}

    
    </>
  )
}

export default App
