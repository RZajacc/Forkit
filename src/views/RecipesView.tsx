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
  
  const [searchObj, setSearchObj] = useState<searchObject>({
    searchVal: '',
    dishType: '',
    cuisine: '',
    dietType: '',
  })

  console.log(searchObj);
  
    return (
    <>
      <SearchBar setSearchObj={setSearchObj} />
      <RecipesList searchObj={searchObj} />
    </>
  )
}

export default RecipesView