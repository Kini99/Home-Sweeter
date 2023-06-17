import React from 'react'
import Navbar from './TopPartOfHomePage/Navbar'
import TopPartOfHomePage from './TopPartOfHomePage/TopPartOfHomePage'
import SecondPartofHomePage from './SecondPartofHomePage/SecondPartofHomePage'
import LastPartofHomePage from './LastPartofHomePage/LastPartofHomePage'
import Footer from './LastPartofHomePage/Footer'
import Searchbarbottom from './LastPartofHomePage/Searchbarbottom'
import LastImage from './LastPartofHomePage/Lastimage'

const HomePage = () => {
  return (
    <div>
        <Navbar />
      <TopPartOfHomePage />
      <SecondPartofHomePage />
   
      <LastPartofHomePage />
      <Footer />
      <Searchbarbottom />
      <LastImage />
    </div>
  )
}

export default HomePage