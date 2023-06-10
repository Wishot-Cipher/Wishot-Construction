import React from 'react'
import { ConstructNav } from '../Components/ConsructNav'
import { ConstuctHero } from '../Components/ConstuctHero'
import { ConstructVirtue } from '../Components/ConstructVirtue'
import { Services } from '../Components/Services'
import { Members } from '../Components/Members'
import { WhyChooseUs } from '../Components/WhyChooseUs'
import { Contact } from '../Components/Contact'

export const Construct = () => {
  return (
    <div>
      <ConstructNav />
      <ConstuctHero />
      <ConstructVirtue />
      <Services />
      <Members />
      <WhyChooseUs />
      <Contact />
    </div>
  )
}
