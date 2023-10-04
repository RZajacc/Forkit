import { useState } from "react";
import SearchBar from '../components/SearchBar'
import RecipesList from '../components/RecipesList'
import Pagination from "../components/Pagination";

interface searchObject {
  searchVal: string,
  dishType: string,
  cuisine: string,
  dietType: string,
}


function RecipesView() {

  const [offset, setOffset] = useState<number>(0)
  const [searchObj, setSearchObj] = useState<searchObject>({
    searchVal: '',
    dishType: '',
    cuisine: '',
    dietType: '',
  })

  return (
    <>
      <SearchBar setSearchObj={setSearchObj} />
      <RecipesList searchObj={searchObj} offset={offset} setOffset={setOffset} />
      <Pagination setOffset={setOffset} offset={offset} />
    </>
  )
}

export default RecipesView