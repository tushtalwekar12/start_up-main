import React from 'react'
import HeroSection from '../components/HeroSection'
import EmpowerSection from '../components/EmpowerSection'
import TestimonialSection from '../components/TestimonialSection'
import ArticleSection from '../components/ArticleSection'
import PageWrapper from './PageWrapper'
import FreeResources from '../components/FreeResources'; // adjust the path if needed


const Home = () => {
  return (
    // <PageWrapper>
    <div className='w-full'>
      <HeroSection />
      <EmpowerSection />
      <TestimonialSection />
      <ArticleSection />
      </div>
    // </PageWrapper>
  )
}

export default Home
