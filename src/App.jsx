

import './App.css'
import Axios from './Components/Axios/Axios'

import Chart from './Components/Chart/Chart'
import Nav from './Components/Nav/Nav'

import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
 
  return (
    <>
     <div className='container mx-auto space-y-10'>
     <Nav></Nav>
     <h1 className='text-center font-bold text-3xl text-red-600'>Vite + React</h1>
     <PriceOptions></PriceOptions>
     <Chart></Chart>
     <Axios></Axios>
     </div>
      
    
    </>
  )
}

export default App
