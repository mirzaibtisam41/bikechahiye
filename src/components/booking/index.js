import React from 'react'
import BookingForm from './BookingForm/BookingForm'
import Hero from './Hero/Hero'
import MostRelatedProduct from '../body/FeaturedProduct/FeaturedProduct'
const index = () => {
    return (
        <div>
            <Hero />
            <BookingForm />
            <MostRelatedProduct/>
        </div>
    )
}

export default index
