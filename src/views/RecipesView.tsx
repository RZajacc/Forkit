import { useState } from "react";
import AppNav from '../components/AppNav'
import SearchBar from '../components/SearchBar'
import RecipesList from '../components/RecipesList'
import Footer from '../components/Footer'



function RecipesView() {
  
  // * Values use states
  const [searchVal, setSearchVal] = useState('')
  const [dishType, setDishType] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [dietType, setDietType] = useState('')

  console.log(searchVal, dishType, cuisine, dietType)
  
    return (
    <>
        <AppNav />
        <SearchBar setSearchVal={setSearchVal} setDishType={setDishType} setCuisine={setCuisine} setDietType={setDietType} />
        <RecipesList />
        <Footer/>
    </>
  )
}

export default RecipesView