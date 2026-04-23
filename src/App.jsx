
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisyUI/daisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceingOptions from './components/priceingOptions/PriceingOptions';

const pricingData = fetch("PricingData.json").then(res => res.json());

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}

      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>}>
          <PriceingOptions pricingData={pricingData}></PriceingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
