import { useState } from "react";
import SearchBar from '../components/SearchBar'
import RecipesList from '../components/RecipesList'
import Footer from '../components/Footer'

interface searchObject {
  searchVal: string,
  dishType: string,
  cuisine: string,
  dietType:string,
}


function RecipesView() {
  
  // * Values use states
  const [searchVal, setSearchVal] = useState<string>('')
  const [dishType, setDishType] = useState<string>('')
  const [cuisine, setCuisine] = useState<string>('')
  const [dietType, setDietType] = useState<string>('')
  const [searchObj, setSearchObj] = useState<searchObject>({
    searchVal: '',
    dishType: '',
    cuisine: '',
    dietType: '',
  })

  
    return (
    <>
        <SearchBar setSearchVal={setSearchVal} setDishType={setDishType} setCuisine={setCuisine} setDietType={setDietType} setSearchObj={setSearchObj} />
        <RecipesList searchVal={searchVal} dishType={dishType} cuisine={cuisine} dietType={dietType} />
        <Footer/>
    </>
  )
}

export default RecipesView