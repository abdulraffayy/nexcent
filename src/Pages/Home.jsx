import React from 'react'

import NavBar from '../Component/NavBar'
import HeaderSectionContent from '../Component/HeaderSectionContents'
import Clients from '../Component/Clients'
import Content from '../Component/Content'
import PixelGrade from '../Component/PixelGrade'
import ClientsThing from '../Component/ClientsThing'
import FooterSide from '../Component/FooterSide'
import NexcentHeading from '../Component/NexcentHeading'
import Marketing from '../Component/Marketing'
import AllCustomer from '../Component/AllCustomer'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <>
      <NavBar />
      <HeaderSectionContent />
      <Clients />
      <NexcentHeading />
      <Content />
      <PixelGrade />
      <ClientsThing />
      <FooterSide />
      <AllCustomer />
      <Marketing />
      <Footer />
  



    </>
  )
}

export default Home