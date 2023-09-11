import React from 'react'
import AppNav from '../components/AppNav'
import SearchBar from '../components/SearchBar'
import RecipesList from '../components/RecipesList'
import Footer from '../components/Footer'



function Recipes({}: Props) {
    return (
    <>
        <AppNav />
            <SearchBar />
            <RecipesList />
            <Footer/>
    </>
  )
}

export default Recipes