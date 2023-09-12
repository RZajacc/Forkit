import { useState } from "react";
import AppNav from '../components/AppNav'
import SearchBar from '../components/SearchBar'
import RecipesList from '../components/RecipesList'
import Footer from '../components/Footer'



function Recipes() {
  
  // * Values use states
  const [dishType, setDishType] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [dietType, setDietType] = useState('')
  
    return (
    <>
        <AppNav />
        <SearchBar setDishType={setDishType} setCuisine={setCuisine} setDietType={setDietType} />
        <RecipesList />
        <Footer/>
    </>
  )
}

export default Recipes