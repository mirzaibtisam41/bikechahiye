import React from 'react'
import Carousel from './CarouselGallery/Carousel'
import SucessStory from "../sucessStory/index"
import TopSeller from './TopSeller/TopSeller'
import BrandPoster from '../body/brandPoster/brandPoster'
import MostRelatedProduct from '../body/FeaturedProduct/FeaturedProduct'
import { SearchBar } from './SearchBar/SearchBar'

const index = () => {
  return (
    <div>
      <Carousel />
      <SearchBar/>
         <MostRelatedProduct/>
          <TopSeller/>
          <SucessStory />
          <BrandPoster/>
    </div>
  )
}

export default index
