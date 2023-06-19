import React from 'react'
import TopPartOfHomePage from '../Components/Home/TopPartOfHomePage/TopPartOfHomePage'
import SecondPartofHomePage from '../Components/Home/SecondPartofHomePage/SecondPartofHomePage'
import LastPartofHomePage from '../Components/Home/LastPartofHomePage/LastPartofHomePage'
import Searchbarbottom from '../Components/Home/LastPartofHomePage/Searchbarbottom'
import LastImage from '../Components/Home/LastPartofHomePage/Lastimage'
import { Carousels } from '../Components/Home/Carousel/Carousels'

const HomePage = () => {
  return (
    <div>
      <TopPartOfHomePage />
      <SecondPartofHomePage />
      <Carousels />
      <LastPartofHomePage />
      {/* <Footer /> */}
      <Searchbarbottom />
      <LastImage />
    </div>
  )
}

export default HomePage