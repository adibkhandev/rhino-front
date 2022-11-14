import React from 'react'
import Landing from './all-pages/Landing'
import RunningOut from './all-pages/RunningOut'
import MostPopular from './all-pages/MostPopular'
import Categories from './all-pages/categories'
import Searched from './all-pages/Searched'
import Bottom from './all-pages/Bottom-nav'

const App = () => {
  return (
     <>
    
      <Landing/>
      <RunningOut/>
      <MostPopular/>
      <Searched/>
     </>
  )
}

export default App