import { useState } from "react";
import AppNav from '../components/AppNav'
import SearchBar from '../components/SearchBar'
import RecipesList from '../components/RecipesList'
import Footer from '../components/Footer'



function RecipesView() {
  
  // * Values use states
  const [searchVal, setSearchVal] = useState<string>('')
  const [dishType, setDishType] = useState<string>('')
  const [cuisine, setCuisine] = useState<string>('')
  const [dietType, setDietType] = useState<string>('')

  
    return (
    <>
        <AppNav />
        <SearchBar setSearchVal={setSearchVal} setDishType={setDishType} setCuisine={setCuisine} setDietType={setDietType} />
        <RecipesList searchVal={searchVal} dishType={dishType} cuisine={cuisine} dietType={dietType} />
        <Footer/>
    </>
  )
}

export default RecipesView