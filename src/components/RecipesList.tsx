import { useEffect, useState } from "react";

interface RecipeGeneral {
  id: number,
  title: string,
  image: string
}

interface Props {
  searchVal: string,
  dishType: string,
  cuisine: string,
  dietType: string,
}

function RecipesList({searchVal, dishType, cuisine, dietType} : Props) {
  
  // * ------------ DEFINE USESTATES -------------------------------
  const [recipesData, setRecipesData] = useState<RecipeGeneral[]>([
    {
      id: 0,
      title: '',
      image : '',
    }
  ])
  const [totalResults, setTotalResults] = useState<number | null>(null)
  const [offset, setOffset] = useState<number | null>(null)


  const fetchRecipesList = async () => {
    const baseUrl = 'https://api.spoonacular.com/recipes/';
    const apiKey = '72af2c7b661040b7a5f1bc928fa61a0e';
    const page = '10';
    const url = `${baseUrl}complexSearch?apiKey=${apiKey}&query=${searchVal}&type=${dishType}&cuisine${cuisine}&diet=${dietType}&page=${page}}`;

    try {
      // * ----- FETCH ----------------
      const response = await fetch(url);
      const data = await response.json();
      // * ----- ASSIGN VALUES ----------
      const recipeData = data.results as RecipeGeneral[];
      const offsetVal = data.offset as number;
      const totalResVal = data.totalResults as number;
      // * ----- SET USESTATES ------------
      setTotalResults(totalResVal)
      setOffset(offsetVal)
      setRecipesData(recipeData);
    } catch (error) {
      console.log("Error --->", error);
   }
   }
   
  useEffect(() => {
     fetchRecipesList()   
  }, [searchVal, dishType, cuisine, dietType])
  

  
  return (
    <>
    {recipesData && recipesData.map((recipe, idx) => {
      return <p key={idx}>{recipe.title}</p>
    })}
    </>
  )
}

export default RecipesList