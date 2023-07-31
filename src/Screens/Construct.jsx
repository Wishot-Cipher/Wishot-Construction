import React from 'react'
import { ConstructNav } from '../Components/ConsructNav'
import { ConstuctHero } from '../Components/ConstuctHero'
import { ConstructVirtue } from '../Components/ConstructVirtue'
import { Services } from '../Components/Services'
import { Members } from '../Components/Members'
import { WhyChooseUs } from '../Components/WhyChooseUs'
import { FaqSection } from '../Components/FaqSection'
import { Testimonies } from '../Components/Testimonies'
import { Footer } from '../Components/Footer'

export const Construct = () => {
  return (
    <div>
      <ConstructNav />
      <ConstuctHero />
      <ConstructVirtue />
      <Services />
      <Members />
      <WhyChooseUs />
      <FaqSection />
      <Testimonies />
      <Footer />
    </div>
  )
}
